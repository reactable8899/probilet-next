export enum STEPS {
  SIGNIN = 'signin',
  REGISTER = 'register',
  SUCCESS = 'success',
  ENTER_CODE = 'code',
  CONFIRM_EMAIL = 'confirm_email',
}

export enum ORDER_STATUSES_ENUM {
  EX = 'EX',
  AC = 'AC',
  PA = 'PA',
}

export enum ORDER_STATUSES {
  EX = 'Истёк',
  AC = 'В ожидании оплаты',
  PA = 'Оплачено',
}

export enum ORDER_STATUSES_STYLES {
  EX = 'text-red',
  AC = 'text-[#C2A300]',
  PA = 'text-[#00C814]',
}

export enum CHECK_PAYMENT_RESULTS {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
