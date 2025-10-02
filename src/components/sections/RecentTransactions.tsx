import React from 'react';
import { Table, TableColumn } from '../ui/Table';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';

export interface Transaction {
  date: string;
  description: string;
  amount: string;
  status: string;
  method: string;
}

export interface RecentTransactionsProps {
  transactions?: Transaction[];
  title?: string;
}

const defaultTransactions: Transaction[] = [
  {
    date: '2024-03-15',
    description: 'Home Depot Purchase',
    amount: '$250.00',
    status: 'Completed',
    method: 'Virtual Card'
  },
  {
    date: '2024-03-14',
    description: 'Lowes Hardware',
    amount: '$175.50',
    status: 'Completed',
    method: 'Virtual Card'
  },
  {
    date: '2024-03-13',
    description: 'Claim Payment',
    amount: '$5,000.00',
    status: 'Completed',
    method: 'Deposit'
  }
];

export function RecentTransactions({ 
  transactions = defaultTransactions, 
  title = "Recent Transactions" 
}: RecentTransactionsProps) {
  const columns: TableColumn<Transaction>[] = [
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
      width: '120px'
    },
    {
      key: 'description',
      title: 'Description',
      dataIndex: 'description'
    },
    {
      key: 'amount',
      title: 'Amount',
      dataIndex: 'amount',
      align: 'right',
      width: '100px'
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: '120px',
      render: (value: unknown) => (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
          {value as string}
        </span>
      )
    },
    {
      key: 'method',
      title: 'Method',
      dataIndex: 'method',
      width: '120px'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <Card>
        <Label as="h2" variant="heading" size="2xl" className="mb-6">
          {title}
        </Label>
        <Table 
          columns={columns} 
          data={transactions}
          striped
          hover
        />
      </Card>
    </div>
  );
}
