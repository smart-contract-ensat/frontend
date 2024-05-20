// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductContract {
    // Propriétaire du contrat
    address public owner;

    // Structure pour stocker les informations des transactions
    struct Transaction {
        string clientName;
        string productName;
        uint256 productPrice;
        string producerName;
        
    }

   

    // Tableau pour stocker les transactions
    Transaction[] public transactions;

 struct Avancemnt {
          string phase1;
          string phase2;
          string phase3;
          string phase4;
          string phase5;
    }

    // Constructeur du contrat, définit l'owner
    constructor() {
        owner = msg.sender;
    }

    // Fonction pour ajouter une transaction(la trace)
    function addTransaction(
        string memory _clientName,
        string memory _productName,
        uint256 _productPrice,
        string memory _producerName
    ) public  {
        transactions.push(Transaction(_clientName, _productName, _productPrice, _producerName));
    }

    // Fonction pour obtenir le nombre total de transactions
    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    // Fonction pour obtenir les détails d'une transaction par son index
    function getTransaction(uint256 index) public view returns (string memory, string memory, uint256, string memory) {
        require(index < transactions.length, "Index hors limite");
        Transaction memory transaction = transactions[index];
        return (transaction.clientName, transaction.productName, transaction.productPrice, transaction.producerName);
    }
}
