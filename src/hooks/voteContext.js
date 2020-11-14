import React, { useEffect, useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

import { ConsumeAuth } from "./authContext";

import {
  setProposalsStorage,
  getProposalsStorage,
} from "./storage";

const voteContext = createContext();

function useProvideVote() {
  const authContext = ConsumeAuth();

  const [proposals, setProposals] = useState([]);

  const addProposal = async (proposal) => {
    const proposalExists = proposals.find(x => x.proposalId === proposal.proposalId)
    if (!proposalExists) {
      const newProposals = [...proposals, proposal]
      setProposals(newProposals)
      setProposalsStorage(newProposals)
    }
  }

  const deleteProposalById = async (proposalId) => {
    const remainingProposals = proposals.filter(proposal => proposal.proposalId !== proposalId);
    setProposals(remainingProposals);
    setProposalsStorage(remainingProposals)
  }

  const clearAllProposals = () => {
    setProposals([]);
    setProposalsStorage([]);
  }

  useEffect(() => {
    if (authContext.isLoggedIn()) {
      const proposalsStorage = getProposalsStorage();
      if (proposalsStorage) {
        setProposals(proposalsStorage);
      }
    }
  }, [authContext.isLoggedInValue]);

  return {
    proposals,
    setProposals,
    addProposal,
    deleteProposalById,
    clearAllProposals
  };
}

export function ProvideVote({ children }) {
  const voteProvider = useProvideVote();

  return (
    <voteContext.Provider value={voteProvider}>{children}</voteContext.Provider>
  );
}

export const ConsumeVote = () => {
  return useContext(voteContext);
};

ProvideVote.propTypes = {
  children: PropTypes.node.isRequired,
};
