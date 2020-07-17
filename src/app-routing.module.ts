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
