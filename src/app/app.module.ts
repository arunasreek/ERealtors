import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GenealogyComponent } from './view/network/genealogy/genealogy.component';
import { AddNewMemberComponent }  from './view/network/add-new-member/add-new-member.component';
import { LoginComponent }  from './view/login/login.component';
import { RegisterComponent }  from './view/register/register.component';
import { ManageProductsComponent }  from './view/e-commerce/manage-products/manage-products.component';
import { EcommerceStoreComponent }  from './view/e-commerce/ecommerce-store/ecommerce-store.component';
import { ManageCategoryComponent }  from './view/e-commerce/manage-category/manage-category.component';
import { GenericComponent }  from './view/e-commerce/generic/generic.component';
import { StoreComponent }  from './view/e-commerce/store/store.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
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
import { FormsModule } from '@angular/forms';
import {ServicesModule} from '../app/services/services.module';
import { JournalVoucherComponent } from './view/e-wallet/journal-voucher/journal-voucher.component';
import { PurchaseInvoiceComponent } from './view/e-wallet/purchase-invoice/purchase-invoice.component';
import { StatementAccountComponent } from './view/e-wallet/statement-account/statement-account.component';
import { ProfitLossAccountComponent } from './view/e-wallet/profit-loss-account/profit-loss-account.component';
import { BalanceSheetComponent } from './view/e-wallet/balance-sheet/balance-sheet.component';
//config module
import { AppConfigModule, AppConfig } from './config/app.config.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './view/profile/profile.component';


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
    PaymentVoucherComponent,
    ReceiptVoucherComponent,
    JournalVoucherComponent,
    PurchaseInvoiceComponent,
    StatementAccountComponent,
    ProfitLossAccountComponent,
    BalanceSheetComponent,
    StoreComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ServicesModule,
    AppConfigModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CarouselModule.forRoot()    
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
