import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { GenealogyComponent } from './network/genealogy/genealogy.component';
import { AddNewMemberComponent } from './network/add-new-member/add-new-member.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageProductsComponent } from './e-commerce/manage-products/manage-products.component';

import { EcommerceStoreComponent } from './e-commerce/ecommerce-store/ecommerce-store.component';
import { ManageCategoryComponent } from './e-commerce/manage-category/manage-category.component';
import { GenericComponent } from './e-commerce/generic/generic.component';
import { AllMembersListComponent } from './network/all-members-list/all-members-list.component';
import { BusinessTransactionsComponent } from './business/business-transactions/business-transactions.component';
import { CommissionsExpensesComponent } from './business/commissions-expenses/commissions-expenses.component';
import { SalesEarningsComponent } from './business/sales-earnings/sales-earnings.component';
import { MemberEwalletBalanceComponent } from './business/member-ewallet-balance/member-ewallet-balance.component';
import { TransactionSummaryComponent } from './business/transaction-summary/transaction-summary.component';
import { SettingsComponent } from './settings/settings.component';
import { ActivityLogComponent } from './security/activity-log/activity-log.component';
import { TransactionPasswordComponent } from './security/transaction-password/transaction-password.component';
import { UserActivityLogComponent } from './security/user-activity-log/user-activity-log.component';
import { SalesByUserComponent } from './reports/sales-by-user/sales-by-user.component';
import { AllFundDepositsComponent } from './reports/all-fund-deposits/all-fund-deposits.component';
import { CurrentMonthPayoutsComponent } from './reports/current-month-payouts/current-month-payouts.component';
import { FundDepositsComponent } from './reports/fund-deposits/fund-deposits.component';
import { MemberRanksOverviewComponent } from './reports/member-ranks-overview/member-ranks-overview.component';
import { PurchasesReportComponent } from './reports/purchases-report/purchases-report.component';
import { RankAnalysisComponent } from './reports/rank-analysis/rank-analysis.component';
import { GenerateEpinComponent } from './e-pin/generate-epin/generate-epin.component';
import { MyEpinsComponent } from './e-pin/my-epins/my-epins.component';
import { EpinHistoryComponent } from './e-pin/epin-history/epin-history.component';
import { AllEpinsComponent } from './e-pin/all-epins/all-epins.component';
import { EpinConfigurationsComponent } from './e-pin/epin-configurations/epin-configurations.component';
import { AddNewCategoryComponent } from './e-commerce/add-new-category/add-new-category.component';
import { ProductCategoryComponent } from './e-commerce/product-category/product-category.component';
import { OrdersReportComponent } from './e-commerce/orders-report/orders-report.component';
import { MyWithdrawalRequestsComponent } from './e-wallet/my-withdrawal-requests/my-withdrawal-requests.component';
import { FundTansferComponent } from './e-wallet/fund-tansfer/fund-tansfer.component';
import { WithdrawalsOutwardFundsComponent } from './e-wallet/withdrawals-outward-funds/withdrawals-outward-funds.component';
import { WithdrawFromEwalletComponent } from './e-wallet/withdraw-from-ewallet/withdraw-from-ewallet.component';
import { EWalletSummaryComponent } from './e-wallet/e-wallet-summary/e-wallet-summary.component';
import { AllTransactionsComponent } from './e-wallet/all-transactions/all-transactions.component';
import { EarningsFundsComponent } from './e-wallet/earnings-funds/earnings-funds.component';
import { WithdrawalRequestsComponent } from './payout-reports/withdrawal-requests/withdrawal-requests.component';
import { ActivePayoutsComponent } from './payout-reports/active-payouts/active-payouts.component';


const routes: Routes = [ 
{ path: 'dashboard', component: DashboardComponent },
{ path: 'genealogy', component: GenealogyComponent },
{ path: 'add-new-member', component: AddNewMemberComponent },
{ path: 'login', component: LoginComponent },
{ path: 'manage-products', component: ManageProductsComponent },
{ path: 'ecommerce-store', component: EcommerceStoreComponent },
{ path: 'manage-category', component: ManageCategoryComponent },
{ path: 'generic', component: GenericComponent },
{ path: 'all-members-list', component:AllMembersListComponent },
{ path: 'business-transactions', component:BusinessTransactionsComponent  },
{ path: 'commissions-expenses', component:CommissionsExpensesComponent  },
{ path: 'sales-earnings', component: SalesEarningsComponent },
{ path: 'member-ewallet-balance', component:MemberEwalletBalanceComponent  },
{ path: 'transaction-summary', component:TransactionSummaryComponent },
{ path: 'settings', component:SettingsComponent },
{ path: 'activity-log', component: ActivityLogComponent },
{ path: 'transaction-password', component:TransactionPasswordComponent },
{ path: 'user-activity-log', component:UserActivityLogComponent },
{ path: 'sales-by-user', component:SalesByUserComponent },
{ path: 'all-fund-deposits', component:AllFundDepositsComponent },
{ path: 'current-month-payouts', component:CurrentMonthPayoutsComponent },
{ path: 'fund-deposits', component:FundDepositsComponent },
{ path: 'member-ranks-overview', component:MemberRanksOverviewComponent },
{ path: 'purchases-report', component:PurchasesReportComponent },
{ path: 'rank-analysis', component:RankAnalysisComponent },
{ path: 'generate-epin', component:GenerateEpinComponent },
{ path: 'my-epins', component:MyEpinsComponent },
{ path: 'epin-history', component:EpinHistoryComponent },
{ path: 'all-epins', component:AllEpinsComponent },
{ path: 'epin-configurations', component:EpinConfigurationsComponent },
{ path: 'add-new-category', component:AddNewCategoryComponent },
{ path: 'product-category', component:ProductCategoryComponent },
{ path: 'orders-report', component:OrdersReportComponent },
{ path: 'my-withdrawal-requests', component:MyWithdrawalRequestsComponent },
{ path: 'fund-tansfer', component:FundTansferComponent },
{ path: 'withdrawals-outward-funds', component:WithdrawalsOutwardFundsComponent },
{ path: 'withdraw-from-ewallet', component:WithdrawFromEwalletComponent },
{ path: 'e-wallet-summary', component:EWalletSummaryComponent },
{ path: 'all-transactions', component:AllTransactionsComponent },
{ path: 'earnings-funds', component:EarningsFundsComponent },
{ path: 'withdrawal-requests', component:WithdrawalRequestsComponent },
{ path: 'active-payouts', component:ActivePayoutsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppRoutingModule { }
