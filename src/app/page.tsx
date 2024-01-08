import DashboardShell from "@/components/dashboard-shell";
import OverviewStats from "@/components/overview-stats";
import TransactionsTable from "@/components/transactions-table";

export default function Home() {
  return (
    <>
      <DashboardShell>
        <OverviewStats />
        <TransactionsTable />
      </DashboardShell>
    </>
  );
}
