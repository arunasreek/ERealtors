import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { GenealogyComponent }  from './view/network/genealogy/genealogy.component';
import { AddNewMemberComponent }  from './view/network/add-new-member/add-new-member.component';
import { LoginComponent }  from './view/login/login.component';
import { RegisterComponent }  from './view/register/register.component';
import { ManageProductsComponent }  from './view/e-commerce/manage-products/manage-products.component';

import { EcommerceStoreComponent }  from './view/e-commerce/ecommerce-store/ecommerce-store.component';
import { ManageCategoryComponent }  from './view/e-commerce/manage-category/manage-category.component';
import { GenericComponent }  from './view/e-commerce/generic/generic.component';
import { AllMembersListComponent }  from './view/network/all-members-list/all-members-list.component';
import { BusinessTransactionsComponent }  from './view/business/business-transactions/business-transactions.component';
import { CommissionsExpensesComponent }  from './view/business/commissions-expenses/commissions-expenses.component';
import { SalesEarningsComponent }  from './view/business/sales-earnings/sales-earnings.component';
import { MemberEwalletBalanceComponent }  from './view/business/member-ewallet-balance/member-ewallet-balance.component';
import { TransactionSummaryComponent }  from './view/business/transaction-summary/transaction-summary.component';
import { SettingsComponent }  from './view/settings/settings.component';
import { ActivityLogComponent }  from './view/security/activity-log/activity-log.component';
import { TransactionPasswordComponent }  from './view/security/transaction-password/transaction-password.component';
import { UserActivityLogComponent }  from './view/security/user-activity-log/user-activity-log.component';
import { SalesByUserComponent }  from './view/reports/sales-by-user/sales-by-user.component';
import { AllFundDepositsComponent }  from './view/reports/all-fund-deposits/all-fund-deposits.component';
import { CurrentMonthPayoutsComponent }  from './view/reports/current-month-payouts/current-month-payouts.component';
import { FundDepositsComponent }  from './view/reports/fund-deposits/fund-deposits.component';
import { MemberRanksOverviewComponent }  from './view/reports/member-ranks-overview/member-ranks-overview.component';
import { PurchasesReportComponent }  from './view/reports/purchases-report/purchases-report.component';
import { RankAnalysisComponent }  from './view/reports/rank-analysis/rank-analysis.component';
import { GenerateEpinComponent }  from './view/e-pin/generate-epin/generate-epin.component';
import { MyEpinsComponent }  from './view/e-pin/my-epins/my-epins.component';
import { EpinHistoryComponent }  from './view/e-pin/epin-history/epin-history.component';
import { AllEpinsComponent }  from './view/e-pin/all-epins/all-epins.component';
import { EpinConfigurationsComponent }  from './view/e-pin/epin-configurations/epin-configurations.component';
import { AddNewCategoryComponent }  from './view/e-commerce/add-new-category/add-new-category.component';
import { ProductCategoryComponent }  from './view/e-commerce/product-category/product-category.component';
import { OrdersReportComponent }  from './view/e-commerce/orders-report/orders-report.component';
import { MyWithdrawalRequestsComponent }  from './view/e-wallet/my-withdrawal-requests/my-withdrawal-requests.component';
import { FundTansferComponent }  from './view/e-wallet/fund-tansfer/fund-tansfer.component';
import { WithdrawalsOutwardFundsComponent }  from './view/e-wallet/withdrawals-outward-funds/withdrawals-outward-funds.component';
import { WithdrawFromEwalletComponent }  from './view/e-wallet/withdraw-from-ewallet/withdraw-from-ewallet.component';
import { EWalletSummaryComponent }  from './view/e-wallet/e-wallet-summary/e-wallet-summary.component';
import { AllTransactionsComponent }  from './view/e-wallet/all-transactions/all-transactions.component';
import { EarningsFundsComponent }  from './view/e-wallet/earnings-funds/earnings-funds.component';
import { WithdrawalRequestsComponent }  from './view/payout-reports/withdrawal-requests/withdrawal-requests.component';
import { ActivePayoutsComponent }  from './view/payout-reports/active-payouts/active-payouts.component';
import { PaymentVoucherComponent }  from './view/e-wallet/payment-voucher/payment-voucher.component';
import { ReceiptVoucherComponent }  from './view/e-wallet/receipt-voucher/receipt-voucher.component';
import { JournalVoucherComponent } from './view/e-wallet/journal-voucher/journal-voucher.component';
import { PurchaseInvoiceComponent } from './view/e-wallet/purchase-invoice/purchase-invoice.component';
import { StatementAccountComponent } from './view/e-wallet/statement-account/statement-account.component';
import { ProfitLossAccountComponent } from './view/e-wallet/profit-loss-account/profit-loss-account.component';
import { BalanceSheetComponent } from './view/e-wallet/balance-sheet/balance-sheet.component';
import { StoreComponent }  from './view/e-commerce/store/store.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ChartOfAcctsComponent }  from './view/e-wallet/chart-of-accts/chart-of-accts.component';
import { AuthGuard } from './guards'

const routes: Routes = [ 
{ path: '', pathMatch: 'full', redirectTo: "dashboard" },
{ path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
{ path: 'genealogy', component: GenealogyComponent , canActivate: [AuthGuard] },
{ path: 'add-new-member', component: AddNewMemberComponent , canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'manage-products', component: ManageProductsComponent , canActivate: [AuthGuard] },
{ path: 'ecommerce-store', component: EcommerceStoreComponent , canActivate: [AuthGuard] },
{ path: 'manage-category', component: ManageCategoryComponent , canActivate: [AuthGuard] },
{ path: 'generic', component: GenericComponent , canActivate: [AuthGuard] },
{ path: 'all-members-list', component:AllMembersListComponent , canActivate: [AuthGuard] },
{ path: 'business-transactions', component:BusinessTransactionsComponent  , canActivate: [AuthGuard] },
{ path: 'commissions-expenses', component:CommissionsExpensesComponent  , canActivate: [AuthGuard] },
{ path: 'sales-earnings', component: SalesEarningsComponent , canActivate: [AuthGuard] },
{ path: 'member-ewallet-balance', component:MemberEwalletBalanceComponent  , canActivate: [AuthGuard] },
{ path: 'transaction-summary', component:TransactionSummaryComponent , canActivate: [AuthGuard] },
{ path: 'settings', component:SettingsComponent , canActivate: [AuthGuard] },
{ path: 'activity-log', component: ActivityLogComponent , canActivate: [AuthGuard] },
{ path: 'transaction-password', component:TransactionPasswordComponent , canActivate: [AuthGuard] },
{ path: 'user-activity-log', component:UserActivityLogComponent , canActivate: [AuthGuard] },
{ path: 'sales-by-user', component:SalesByUserComponent , canActivate: [AuthGuard] },
{ path: 'all-fund-deposits', component:AllFundDepositsComponent , canActivate: [AuthGuard] },
{ path: 'current-month-payouts', component:CurrentMonthPayoutsComponent , canActivate: [AuthGuard] },
{ path: 'fund-deposits', component:FundDepositsComponent , canActivate: [AuthGuard] },
{ path: 'member-ranks-overview', component:MemberRanksOverviewComponent , canActivate: [AuthGuard] },
{ path: 'purchases-report', component:PurchasesReportComponent , canActivate: [AuthGuard] },
{ path: 'rank-analysis', component:RankAnalysisComponent , canActivate: [AuthGuard] },
{ path: 'generate-epin', component:GenerateEpinComponent , canActivate: [AuthGuard] },
{ path: 'my-epins', component:MyEpinsComponent , canActivate: [AuthGuard] },
{ path: 'epin-history', component:EpinHistoryComponent , canActivate: [AuthGuard] },
{ path: 'all-epins', component:AllEpinsComponent , canActivate: [AuthGuard] },
{ path: 'epin-configurations', component:EpinConfigurationsComponent , canActivate: [AuthGuard] },
{ path: 'add-new-category', component:AddNewCategoryComponent , canActivate: [AuthGuard] },
{ path: 'product-category', component:ProductCategoryComponent , canActivate: [AuthGuard] },
{ path: 'orders-report', component:OrdersReportComponent , canActivate: [AuthGuard] },
{ path: 'my-withdrawal-requests', component:MyWithdrawalRequestsComponent , canActivate: [AuthGuard] },
{ path: 'fund-tansfer', component:FundTansferComponent , canActivate: [AuthGuard] },
{ path: 'withdrawals-outward-funds', component:WithdrawalsOutwardFundsComponent , canActivate: [AuthGuard] },
{ path: 'withdraw-from-ewallet', component:WithdrawFromEwalletComponent , canActivate: [AuthGuard] },
{ path: 'e-wallet-summary', component:EWalletSummaryComponent , canActivate: [AuthGuard] },
{ path: 'all-transactions', component:AllTransactionsComponent , canActivate: [AuthGuard] },
{ path: 'earnings-funds', component:EarningsFundsComponent , canActivate: [AuthGuard] },
{ path: 'withdrawal-requests', component:WithdrawalRequestsComponent , canActivate: [AuthGuard] },
{ path: 'active-payouts', component:ActivePayoutsComponent , canActivate: [AuthGuard] },
{ path: 'payment-voucher', component:PaymentVoucherComponent , canActivate: [AuthGuard] },
{ path: 'receipt-voucher', component:ReceiptVoucherComponent , canActivate: [AuthGuard] },
{ path: 'journal-voucher', component:JournalVoucherComponent , canActivate: [AuthGuard] },
{ path: 'purchase-invoice', component:PurchaseInvoiceComponent , canActivate: [AuthGuard] },
{ path: 'statement-account', component:StatementAccountComponent , canActivate: [AuthGuard] },
{ path: 'profit-loss-account', component:ProfitLossAccountComponent , canActivate: [AuthGuard] },
{ path: 'balance-sheet', component:BalanceSheetComponent , canActivate: [AuthGuard] },
{ path: 'store', component:StoreComponent , canActivate: [AuthGuard] },
{ path: 'profile', component:ProfileComponent , canActivate: [AuthGuard] },
{ path: 'chart-of-accts', component:ChartOfAcctsComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppRoutingModule { }
