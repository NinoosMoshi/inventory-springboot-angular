package com.ninos.service;

import com.ninos.dto.Response;
import com.ninos.dto.TransactionRequest;
import com.ninos.enums.TransactionStatus;

public interface TransactionService {

    Response restockInventory(TransactionRequest transactionRequest);

    Response sell(TransactionRequest transactionRequest);

    Response returnToSupplier(TransactionRequest transactionRequest);

    Response getAllTransactions(int page, int size, String searchText);

    Response getTransactionById(Long id);

    Response getAllTransactionByMonthAndYear(int month, int year);

    Response updateTransactionStatus(Long transactionId, TransactionStatus transactionStatus);

}
