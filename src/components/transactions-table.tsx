import Card from "@/components/ui/card";
import Pagination from "@/components/ui/pagination";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { transactions } from "@/data/transactions";

export default function TransactionsTable() {
  return (
    <div className="mt-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Transactions | This Month
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <Card>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      <a href="#" className="group inline-flex">
                        Order ID
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group inline-flex">
                        Order Date
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group inline-flex">
                        Order Amount
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group inline-flex">
                        Transaction Fees
                        <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <InformationCircleIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.orderId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-900 sm:pl-0">
                        {transaction.orderId}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {transaction.orderDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                        {transaction.orderAmount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                        {transaction.transactionFees}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
