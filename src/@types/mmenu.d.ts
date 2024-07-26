// Generated by @quicktype's Paste JSON as Code extension
export interface MenuResponse {
  code: number
  message: string
  restaurantMenu: RestaurantMenu
  pointCardBalance: PointCardBalance
  allPromotionNameText: string
}

export interface PointCardBalance {
  cardId: string
  balance: number
}

export interface RestaurantMenu {
  dishesMenu: DishesMenu[]
  table: Table
  restaurantName: string
  restaurantAddress: string
  dishCategories: DishCategory[]
}

export interface DishCategory {
  dishCategoryId: string
  dishCategoryName: string
  localizationNames?: LocalizationName[]
  capichiCategoryOption?: CapichiCategoryOption
  positionIndex?: number
  adminUIColor?: string
}

export enum CapichiCategoryOption {
  SingleDish = 'singleDish',
}

export interface LocalizationName {
  language: Language
  name?: string
}

export enum Language {
  En = 'en',
  Ja = 'ja',
  Ko = 'ko',
  Th = 'th',
  Vi = 'vi',
  Zh = 'zh',
}

export interface DishesMenu {
  dishCategory: DishCategory
  dishes: Dish[]
}

export interface Dish {
  discountPrice: number
  images?: string[]
  status: Status
  name: string
  price: number
  description?: string
  id: string
  isNewDish: boolean
  bestSeller: boolean
  otherLanguageDescription?: string
  dishType: DishType
  vat?: number
  unitId: string
  unitName: string
  hasTopping: boolean
  isBuffetOnly: boolean
  dishOrdinalNumber: number
  comboType: ComboType
  skuCode?: string
  isDishGroup: boolean
  isDisplayLargeImage: boolean
  buffetTimeInMinutes?: number
  buffetNotAllowCustomerOrder?: boolean
  taxPriceIncluded: boolean
  taxReportName?: string
  dynamicPriceForOptionalCombo: boolean
  taxIncludedPrice: number
  baseBlockPrice?: BaseBlockPrice
  firstBlockPrice?: BaseBlockPrice
  buffetFinishNotiTimeInMinutes?: number
  shouldHideNonBuffetDiscountCourseForCustomer?: boolean
  taxExcludedPrice: number
  costPrice?: number
  serviceProduct?: BaseBlockPrice
  productNameForEmployees?: ProductNameForEmployees
  shouldHideForCustomers: boolean
  shouldHideForEmployees: boolean
  notes?: Note[]
  searchIndex: string[]
  toppings?: Topping[]
  attachedDishes?: DishAttachedDish[]
  printerIds?: string[]
  comboOptionGroups?: ComboOptionGroup[]
  properties?: Property[]
}

export interface DishAttachedDish {
  attachedDishName: string
  attachedDishId: string
  quantity: number
  localizationNames: LocalizationName[]
  dishUnit: DishUnit
  dishType: DishType
  attachedDishOrder: number
  isQuantityFixed: boolean
  price?: number
}

export type DishType = 'combo' | 'discount_course' | 'drink' | 'food' | 'other'

export interface DishUnit {
  unitId: UnitID
  unitName: UnitName
}

export enum UnitID {
  The63B698372A7A3B00D87C9445 = '63b698372a7a3b00d87c9445',
  The63B698372A7A3B00D87C9450 = '63b698372a7a3b00d87c9450',
  The63B698372A7A3B00D87C9487 = '63b698372a7a3b00d87c9487',
}

export enum UnitName {
  Chai = 'Chai',
  Phần = 'Phần',
  Đĩa = 'Đĩa',
}

export interface BaseBlockPrice {}

export interface ComboOptionGroup {
  groupName: string
  attachedDishes: DishAttachedDish[]
  minDishNumber: number
  maxDishNumber: number
}

export enum ComboType {
  Fixed = 'fixed',
  Optional = 'optional',
  Unknown = 'unknown',
}

export interface Note {
  noteName: string
  noteItems: NoteItem[]
  appliedDishes: AppliedDish[]
  restaurantId: string
}

export interface AppliedDish {
  dishId: string
  dishName: string
}

export interface NoteItem {
  name: string
}

export enum ProductNameForEmployees {
  Empty = '',
  HiEm = 'Hi em',
}

export interface Property {
  id: string
  name: string
  image: string
  localizationNames: LocalizationName[]
  priority: number
  localizationImages: LocalizationImage[]
}

export interface LocalizationImage {
  language: Language
  image: string
}

export enum Status {
  Available = 'available',
  Unavailable = 'unavailable',
}

export interface Topping {
  toppingId: string
  toppingName: string
  toppingItems?: ToppingItem[]
  isRequired: boolean
  isMultipleSecleted: boolean
  restaurantId: string
  toppingOrdinalNumber: number
  toppingType?: ToppingType
  limitQuantity?: number
  hasQuantity?: boolean
  attachedDishes?: ToppingAttachedDish[]
  localizationNames?: LocalizationName[]
}

export interface ToppingAttachedDish {
  attachedDishName: string
  attachedDishId: string
  price: number
  ordinalNumber?: number
  image?: string
}

export interface ToppingItem {
  name: string
  price: number
  isDefault: boolean
  toppingItemId: string
  status: Status
  quantity: number
  localizationNames?: LocalizationName[]
}

export enum ToppingType {
  AttachedDish = 'attachedDish',
  DishGroup = 'dishGroup',
  Topping = 'topping',
}

export interface Table {
  tableName: string
  tableId: string
  tablePosition: string
}

export interface TableResponse {
  code: number
  message: string
  isNotAllowedToOrder: boolean
  tableOpeningTime: string
  tableClosingTime: string
  table: Table
}

export interface Table {
  id: string
  name: string
  tablePositionId: string
  requiredAddress: boolean
  requiredCompany: boolean
  requiredNumberOfCustomers: boolean
  changePriceAmount: number
  changePriceOption: number
  allowMultipleOrderSessions: boolean
  requiredServingTime: boolean
  requiredPhoneNumber: boolean
  allowOrderDelivery: boolean
  notAskCustomerInformation: boolean
  tableTaxRate: number
  doNotAllowOrder: boolean
  onlyShowMenuForTableWithPrice: boolean
  needTableCleanupTime: number
  minOrderPaymentAmount: number
}

export interface CheckoutResponse {
  code: number
  message: string
  result: CheckoutResult
}

export interface CheckoutResult {
  paymentInfo: PaymentInfo
  pointConsumerInfo: PointConsumerInfo
  deliveryInformation: DeliveryInformation
  _id: string
  numberOfCustomers: number
  tableIds: TableID[]
  status: string
  staffId: string
  representativeId: RepresentativeID
  representativeName: string
  representativePhone: string
  taxRate: number
  pretaxPaymentAmount: number
  paymentMethod: string
  startedAt: Date
  restaurantId: RestaurantID
  orderDetails?: any[]
  discounts: Discount[]
  discountAmount: number
  discountType: string
  discountValue: number
  additionalFeeAmount: number
  roundingPaymentType: string
  roundingAmount: number
  tipAmount: number
  customerPaidAmount: number
  orderSessionNo: number
  buffetDishIds: any[]
  buffetDishIdsWithTime: any[]
  discountCourseDishIdsWithTime: any[]
  isDeliveryOrder: boolean
  pointCardId: string
  pointCardNumber: string
  pointEarnPercentageRate: number
  orderSessionNote: string
  inventoryOutSaleCreated: boolean
  additionalFeeBeforeVAT: boolean
  tableBarcodeList: any[]
  deliveryStatusLog: any[]
  taxPaymentDetails: TaxPaymentDetail[]
  createdAt: Date
  updatedAt: Date
  debtPaymentTransactions: any[]
  restaurantAdditionalFees: any[]
  __v: number
  paymentAmount: number
  taxPaymentAmount: number
  hasChangedPriceDish: boolean
  tablePositionText: string
  tableText: string
  totalDiscountAmount: number
  hasAppliedPromotionDish: boolean
  hasScanQrPromotion: boolean
  hasTableBasedPriceDish: boolean
  id: string
  enableMmenuOnlinePayment: boolean
  createdAtText: string
  createdAtOriginal: Date
  promotionAppliedInOrderSessions: any[]
  discountAmountOfAppliedPromotion: number
  discountAmountByCustomerRank: number
  discountPercentage: number
  taxPaymentAmountDetails: TaxPaymentAmountDetail[]
  additionalFeeVATAmount: number
  pointEarn?: number
  pointRemaining: number
  averagePaymentAmount: number
  billNo: string
  returnAmount: number
}

export interface DeliveryInformation {
  mmenuFoodServiceFee: number
  applicableFees: number
  deliverySource: string
}

export interface Discount {
  discountType: string
  discountValueType: string
  discountAmount: number
  maxDiscountAmount: number
  discountValue: number
  _id: string
  id: string
}

export interface PaymentInfo {
  BIDV: Bidv
  transactionFee: number
}

export interface Bidv {
  data: any[]
}

export interface PointConsumerInfo {
  pointAmount: number
  pointConsumingAmount: number
}

export interface RepresentativeID {
  _id: string
  role: string
  status: string
  isAnonymous: boolean
  fcmTopics: any[]
  fcmRegistrationToken: any[]
  lastOrdersTimeStamp: number[]
  createdAt: Date
  updatedAt: Date
  __v: number
  name: string
  phone: string
  zaloUserId: string
  cardId: string
  friendshipStatusLine: boolean
  hasFollowed: boolean
  address: string
  zaloUserImage: string
  destinations: Destination[]
  company: string
  id: string
}

export interface Destination {
  coordinates: Coordinates
  name: string
  phone: string
  address: string
  isDefault: boolean
  type: string
  _id: string
  id: string
  detailType?: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface RestaurantID {
  exchangePayload: ExchangePayload
  _id: string
  name: string
  address: string
  phone: string
  userId: string
  status: string
  employeeIds: any[]
  image: string
  onlyOneOrderSessionOnSameTable: boolean
  wifiName: string
  wifiPassword: string
  taxRate: number
  doNotIncludePriceInPreviewBill: boolean
  customerOrderToPaymentWithoutStaffConfirmation: boolean
  autoCompleteOrderWhenStaffsOrder: boolean
  enablePaymentButtonWhenOrderByStaff: boolean
  enablePrintPreviewBillButtonWhenOrderByStaff: boolean
  sendNotiToComputer: boolean
  multiplePaymentMethod: boolean
  customerOrderToBeApprovedWithoutStaffConfirmation: boolean
  includeOrderDetailNumberToAutoPrintForKitchenBar: boolean
  enableInventoryManagement: boolean
  requireCustomerInfomation: boolean
  callStaffWhenCustomerOrdered: boolean
  alwaysAllowToCallStaff: boolean
  enableCustomerMenuPageV2: boolean
  enableCustomerMenuPageV3: boolean
  enableMmenuOnlinePayment: boolean
  mirrorPrinterQueueUrls: any[]
  mirrorPrinterJobRestaurantIds: any[]
  restaurantEmployeeOrderUIV2: boolean
  printerUsingBackgroundService: boolean
  notiWhenUnavailablePrinter: boolean
  doNotIncludeCustomerpayAmountInPaymentProcess: boolean
  inputCustomerInfoBeforeOrderSessionCreation: boolean
  reportTimeVietnamTime: number
  printerWebSocketConnectionIds: any[]
  hideDishStatusInCustomerWeb: boolean
  showDishImage: boolean
  defaultBillV2: boolean
  upgradeBillV2: boolean
  fetchMenuWithPerformanceImprovement: boolean
  showToppingPriceByTotalPrice: boolean
  showInServingTabOrder: boolean
  newOrderFlowMobileV25: boolean
  enableDeliveryService: boolean
  enableCustomerReview: boolean
  isAllowedSendMessageFromZSN: boolean
  enableSettingRestaurant: boolean
  createUpdateDishVersion: string
  isPrepaidRestaurant: boolean
  timezone: string
  utcOffset: number
  enablePointCard: boolean
  currency: string
  pointExchangeRate: number
  disableCustomerNote: boolean
  notIncludeToppingInDishSaleReport: boolean
  pointEarnPercentageRate: number
  autoPrinterV2: boolean
  printerWebSocket: boolean
  enableMerchanMenuVertial: boolean
  crmV2: boolean
  bankPaymentInfoList: BankPaymentInfoList[]
  activatedPromotions: any[]
  createdAt: Date
  updatedAt: Date
  __v: number
  printerQueueUrl: string
  country: string
  defaultAdditionalServiceFeePercentage: number
  defaultDiscountFeePercentage: number
  description: string
  email: string
  fanpage: string
  hotline: string
  prepaidWithPointOnly: boolean
  resetUnavailableDishDaily: boolean
  restaurantEmployeeOrderUIV3: boolean
  scanQRCodeDiscountAmount: number
  scanQRCodeDiscountType: string
  scanQRCodeMaxDiscountAmount: number
  scanQRCodeToDiscount: boolean
  syncInventoryId: string
  unconfirmOrderNotificationIntervalSeconds: number
  enableChatGpt: boolean
  defaultBillV3: boolean
  upgradeBillV3: boolean
  restaurantChainId: string
  roundingPayment: boolean
  taxId: string
  clientWebType: string
  company: string
  postalCode: string
  roundingPaymentType: string
  enableTwoPaymentMethods: boolean
  usePaymentMethodLocalizationV2: boolean
  shopType: string
  customerLanguages: string[]
  roundingAfterTaxDishPriceType: string
  roundingBeforeTaxDishPriceType: string
  restaurantOnlyStartWhenOpeningShift: boolean
  shiftNeedClosedWithin24h: boolean
  soundNotificationWhenNewOrderIsAvailable: boolean
  soundNotificationWhenUpdateOrder: boolean
  shouldHideNonBuffetDiscountCourseForCustomer: boolean
  enableDating: boolean
  showDishPriceAfterTaxForCustomer: boolean
  enableReservation: boolean
  footerTextForBill: any[]
  headerTextForBill: any[]
  isNewOrderTableTabletUI: boolean
  noSoundNotificationWhenNewOrderIsAvailable: boolean
  noSoundNotificationWhenUpdateOrder: boolean
  restaurantImages: any[]
  fetchPrintJobDuration: number
  enableDailyReport: boolean
  enableSmartKitchenV2: boolean
  administrativeAreaLevel1: string
  branch: string
  enableKoreanReservationSetting: boolean
  enableTip: boolean
  enableVietnameseReservationSetting: boolean
  posId: string
  totalSeats: number
  ipAddress: string
  enableGacha: boolean
  operatingTimes: any[]
  productCategoryKeyNames: any[]
  additionalFeeBeforeVAT: boolean
  listEmailGetNotify: any[]
  splitOrderByTaxRate: boolean
  redirectGetPrinterJob: boolean
  resendFailedPrinterJob: boolean
  enableQuantityInStockManagement: boolean
  latitude: number
  longitude: number
  manageDishV2: boolean
  useMetadataServiceForActiveTable: boolean
  useMetadataServiceForGetOrderSessionById: boolean
  enableMmenuFoodVN: boolean
  redirectOrderRoutes: boolean
  processImageQueueV2: boolean
  requiredEmployeeNoWhenOrder: boolean
  customerDialogWithPhoneAndName: boolean
  enableWorkShiftReportByCashier: boolean
  zaloMiniAppUrl: string
  enableTableQrSpamOrderProtection: boolean
  thaiNewPrinterFlow: boolean
  closingTime: string
  expirationDatePlan: string
  openingTime: string
  customerSupportAllowTimestamp: number
  usingCustomerSupportFlag: boolean
  restaurantStaffOrderUIWithFoodTypeV2: boolean
  staffSearchMenuFromCache: boolean
  restaurantStaffOrderUIWithFoodTypeV3: boolean
  enableSmartKitchenV3: boolean
  useCalendarViewForRevenueReport: boolean
  childRestaurantIds: any[]
  restaurantStaffBuyerDoesNotTakeInvoice: boolean
  totalCreditExistingWorkShiftTh: boolean
  screenHeight: number
  screenWidth: number
  id: string
}

export interface BankPaymentInfoList {
  bankName: string
  bankAccount: string
  bankOwnerName: string
  qrCode: string
  bankBin: string
  _id: string
  id: string
}

export interface ExchangePayload {
  exchangeUSDtoKHR: number
}

export interface TableID {
  _id: string
  name: string
  position: string
  tablePositionId: string
  restaurantId: string
  status: string
  requiredNumberOfCustomers: boolean
  requiredAddress: boolean
  requiredCompany: boolean
  requiredPhoneNumber: boolean
  requiredServingTime: boolean
  notAskCustomerInformation: boolean
  changePriceAmount: number
  allowMultipleOrderSessions: boolean
  allowOrderDelivery: boolean
  tableTaxRate: number
  doNotAllowOrder: boolean
  __v: number
  createdAt: Date
  updatedAt: Date
  needTableCleanupTime: number
  allowedOrderTimeRanges: any[]
  changePriceOption: string
  minOrderPaymentAmount: number
  onlyShowMenuForTableWithPrice: boolean
  unconfirmedOrderTime: number
  barcodeList: any[]
  customerCallTimeStamp: number
  id: string
}

export interface TaxPaymentAmountDetail {
  taxRate: number
  taxPaymentAmount: number
}

export interface TaxPaymentDetail {
  taxRate: number
  taxPaymentAmount: number
  _id: string
  id: string
}

export interface CheckoutOrderDetailsResponse {
  code: number
  message: string
  orderSession: OrderSession
}

export interface OrderSession {
  orderSessionId: string
  tableIds: string[]
  tableNames: string[]
  taxRate: number
  paymentMethod: string
  orderDetails?: CheckoutOrderDetail[]
  discountAmount: number
  representativeId: string
  representativeName: string
  representativePhone: string
  staffId: string
  numberOfCustomers: number
  startedAt: Date
  pretaxPaymentAmount: number
  createdAt: Date
  status: string
  customerPaidAmount: number
  taxPaymentAmount: number
  averagePaymentAmount: number
  paymentAmount: number
  restaurantId: string
  restaurantName: string
  returnAmount: number
  billNo: string
  customerOrderToPaymentWithoutStaffConfirmation: boolean
  tableText: string
  endedAt: Date
  createdAtText: string
  endedAtText: string
  restaurantHotline: string
  restaurantPhone: string
  representativeAddress: string
  restaurantWifiPassword: string
  startedAtText: string
  totalDishQuantityNumber: number
  bankPaymentInfoList: BankPaymentInfoList[]
  enableMmenuOnlinePayment: boolean
  tipAmount: number
  discountValue: number
  representativeCompany: string
  restaurantAddressText: string
  additionalFeeAmount: number
  defaultBillV2: boolean
  totalDishDiscountAmount: number
  representativeServingTime: number
  servingTimeText: string
  upgradeBillV2: boolean
  pointCardId: string
  pointEarn?: number
  pointEarnPercentageRate: number
  pointCardNumber: string
  orderSessionNote: string
  tippedEmployeeId: string
  tippedEmployeeName: string
  defaultBillV3: boolean
  roundingAmount: number
  taxPaymentAmountDetails: TaxPaymentAmountDetail[]
  discountType: string
  pointRemaining: number
  totalDiscountAmount: number
  currentTimeDisplayText: string
  isDeliveryOrder: boolean
}

export interface BankPaymentInfoList {
  bankName: string
  bankAccount: string
  bankOwnerName: string
  qrCode: string
  bankBin: string
}

export interface CheckoutOrderDetail {
  dishOrder: DishOrder[]
  orderSessionId: string
  userId: string
  userName: string
  userPhone: string
  tableId: string
  tableName: string
  createdAt: Date
  id: string
  status: string
  createdAtText: string
  userAddress: string
  orderDetailNumber: number
  servingTime: number
  servingTimeText: string
  isCustomerApp: boolean
  ticketNo: number
}

export interface DishOrder {
  status: Status
  dishCategoryId: string[]
  price: number
  quantity: number
  dishName: string
  dishId: string
  orderDetailId: string
  tableName: string
  tableId: string
  customerName: string
  totalPrice: number
  images: string[]
  dishType: string
  dishOrderId: string
  attachedDishDisplayText: string
  unitId: string
  unitName: string
  comboVersion: string
}

export interface TaxPaymentAmountDetail {
  taxRate: number
  taxPaymentAmount: number
}

export interface OrderHistoryResponse {
  code: number
  message: string
  activeOrder?: ActiveOrder
}

export interface ActiveOrder {
  orderId: string
  tables: Table[]
  taxRate: number
  orderDetails?: OrderDetail[]
  discountAmount: number
  discountValue: number
  representativeId: string
  representativeName: string
  representativePhone: string
  representativeAddress: string
  representativeCompany: string
  numberOfCustomers: number
  pretaxPaymentAmount: number
  createdAt: Date
  createdAtText: string
  status: string
  taxPaymentAmount: number
  paymentAmount: number
  restaurantId: string
  restaurantName: string
  restaurantAddress: string
  customerOrderToPaymentWithoutStaffConfirmation: boolean
  tableText: string
  multiplePaymentMethod: boolean
  enableMmenuOnlinePayment: boolean
  tipAmount: number
  tippedEmployeeId: string
  enableTip: boolean
  tippedEmployeeName: string
  additionalFeeAmount: number
  discountAmountOfAppliedPromotion: number
  discountAmountByCustomerRank: number
}

export interface OrderDetail {
  dishOrders?: DishOrder[]
  orderDetailId: string
  isCustomerApp: boolean
  createdAtText: string
}

export interface DishOrder {
  status: string
  price: number
  quantity: number
  dishName: string
  dishId: string
  changeRequest: ChangeRequest
  totalPrice: number
  images: string[]
  dishType: string
  dishOrderId: string
  toppingDisplayText: string
  attachedDishDisplayText: string
  taxPriceIncluded: boolean
  ticketDishNo: number
}

export interface ChangeRequest {}

export interface Table {
  tableId: string
  tableName: string
}

export interface User {
  _id: string
  status: string
  zaloUserId: string
  __v: number
  createdAt: Date
  destinations: any[]
  fcmRegistrationToken: any[]
  fcmTopics: any[]
  friendshipStatusLine: boolean
  hasFollowed: boolean
  isAnonymous: boolean
  lastOrdersTimeStamp: any[]
  role: string
  updatedAt: Date
  id: string
}

export interface CartResponse {
  code: number
  result: Result
  shouldShowCustomerInformationFormPopup: boolean
  userName: string
  userAddress: string
  requiredAddress: boolean
  requiredCompany: boolean
  requiredNumberOfCustomers: boolean
  requiredServingTime: boolean
  numberOfCustomers: number
  requiredPhoneNumber: boolean
  requireCustomerInfomation: boolean
  allowOrderDelivery: boolean
  currency: string
}

export interface Result {
  cartItems: CartItem[]
  totalOrderPaid: number
  totalItemCount: number
  totalCartPaid: number
  totalTaxIncludedCartPaid: number
  totalOrderQuantity: number
}

export interface CartItem {
  quantity: number
  dishId: DishID
  toppingItems: CartToppingItem[]
  attachedDishes: CartItemAttachedDish[]
  _id: string
  id: string
  price: number
  totalPrice: number
  note?: string
  toppingDisplayText?: string
  attachedDishDisplayText?: string
}

export interface CartItemAttachedDish {
  attachedDishName: string
  attachedDishId: string
  quantity: number
  _id: string
  id: string
}

export interface DishID {
  buffetSetting: BuffetSetting
  dynamicPriceForOptionalCombo: boolean
  printerIds: any[]
  properties: any[]
  searchIndex: any[]
  quantityInStock: number
  outOfStockNotificationFlag: boolean
  shouldHideForCustomers: boolean
  shouldHideForEmployees: boolean
  _id: string
  name: string
  otherLanguageName: string
  price: number
  discountPrice: number
  description: string
  otherLanguageDescription?: string
  images: string[]
  restaurantId: string
  status: Status
  dishType: string
  vat: number
  dishCategoryIds: string[]
  isNewDish: boolean
  isBuffetOnly: boolean
  bestSeller: boolean
  tags: string[]
  dishNameAndDescriptionByLanguage: DishNameAndDescriptionByLanguage[]
  unitId: string
  unitName: string
  attachedDishes: any[]
  comboType: string
  comboOptionGroups: ComboOptionGroup[]
  skuCode: string
  dishPricesByTable: any[]
  dishOrdinalNumber: number
  dishThirdParty: any[]
  isDisplayLargeImage: boolean
  isDishGroup: boolean
  taxPriceIncluded: boolean
  toppings: CartTopping[]
  __v: number
  createdAt: Date
  updatedAt: Date
  notes: any[]
  specialBlockPrice: any[]
  id: string
  buffetNotAllowCustomerOrder?: boolean
  buffetTimeInMinutes?: number
  manualEntryPrice?: number
  taxReportName?: string
  baseBlockPrice?: BlockPrice
  buffetFinishNotiTimeInMinutes?: number
  costPrice?: number
  firstBlockPrice?: BlockPrice
  productNameForEmployees?: string
  serviceProduct?: ServiceProduct
  shouldHideNonBuffetDiscountCourseForCustomer?: boolean
}

export interface BlockPrice {
  weekDays: any[]
  _id: string
  id: string
}

export interface BuffetSetting {
  exclusiveDishTypes: any[]
}

export interface ComboOptionGroup {
  groupName: string
  attachedDishes: ComboOptionGroupAttachedDish[]
  minDishNumber: number
  maxDishNumber: number
  _id: string
  id: string
}

export interface ComboOptionGroupAttachedDish {
  dishUnit: DishUnit
  attachedDishName: string
  attachedDishId: string
  quantity: number
  dishType: string
  localizationNames: LocalizationName[]
  attachedDishOrder: number
  isQuantityFixed: boolean
  _id: string
  id: string
  price?: number
}

export interface DishUnit {
  unitId: string
  unitName: string
}

export interface LocalizationName {
  language: Lang
  name?: string
  _id: string
  id: string
}

export enum Lang {
  En = 'en',
  Ja = 'ja',
  Ko = 'ko',
  Th = 'th',
  Vi = 'vi',
  Zh = 'zh',
}

export interface DishNameAndDescriptionByLanguage {
  lang: Lang
  dishName?: string
  dishDescription?: string
  _id: string
  id: string
}

export interface ServiceProduct {
  _id: string
  usageTimeRanges: any[]
  id: string
}

export interface CartTopping {
  restaurantId: string
  toppingName: string
  localizationNames: LocalizationName[]
  toppingItems: CartToppingItem[]
  attachedDishes: any[]
  isRequired: boolean
  isMultipleSecleted: boolean
  appliedDishes: any[]
  inventoryRelatedType: string
  status: string
  toppingOrdinalNumber: number
  _id: string
  updatedAt: Date
  createdAt: Date
  __v: number
  id: string
  toppingType?: string
}

export interface CartToppingItem {
  quantity?: number
  name: string
  price: number
  isDefault: boolean
  status?: string
  localizationNames: LocalizationName[]
  _id: string
  id: string
  toppingId?: string
}

export interface LoginResponse {
  user: User
  accessToken: string
}

export interface User {
  _id: string
  status: string
  zaloUserId: string
  __v: number
  createdAt: Date
  destinations: any[]
  fcmRegistrationToken: any[]
  fcmTopics: any[]
  friendshipStatusLine: boolean
  hasFollowed: boolean
  isAnonymous: boolean
  lastOrdersTimeStamp: number[]
  role: string
  updatedAt: Date
  name: string
  cardId: string
  id: string
}
