import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GenealogyComponent } from './network/genealogy/genealogy.component';
import { AddNewMemberComponent } from './network/add-new-member/add-new-member.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageProductsComponent } from './e-commerce/manage-products/manage-products.component';
import { EcommerceStoreComponent } from './e-commerce/ecommerce-store/ecommerce-store.component';
import { ManageCategoryComponent } from './e-commerce/manage-category/manage-category.component';
import { GenericComponent } from './e-commerce/generic/generic.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    GenealogyComponent,
    AddNewMemberComponent,
    LoginComponent,
    RegisterComponent,
    ManageProductsComponent,  
    EcommerceStoreComponent,
    ManageCategoryComponent,
    GenericComponent,
    AllMembersListComponent,
    BusinessTransactionsComponent,
    CommissionsExpensesComponent,
    SalesEarningsComponent,
    MemberEwalletBalanceComponent,
    TransactionSummaryComponent,
    SettingsComponent,
    ActivityLogComponent,
    TransactionPasswordComponent,
    UserActivityLogComponent,
    SalesByUserComponent,
    AllFundDepositsComponent,
    CurrentMonthPayoutsComponent,
    FundDepositsComponent,
    MemberRanksOverviewComponent,
    PurchasesReportComponent ,
    RankAnalysisComponent,
    GenerateEpinComponent,
    MyEpinsComponent,
    EpinHistoryComponent,
    AllEpinsComponent,
    EpinConfigurationsComponent,
    AddNewCategoryComponent,
    ProductCategoryComponent,
    OrdersReportComponent,
    MyWithdrawalRequestsComponent,
    FundTansferComponent,
    WithdrawalsOutwardFundsComponent,
    WithdrawFromEwalletComponent,
    EWalletSummaryComponent,
    AllTransactionsComponent,
    EarningsFundsComponent,
    WithdrawalRequestsComponent,
    ActivePayoutsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
