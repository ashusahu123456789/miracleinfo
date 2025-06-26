import { billingData } from './Billing';
import { inventoryManagementData } from './InventoryManagement';
import { backendData } from './Backend';
import { pushNotificationApiData } from './PushNotificationApi';
import { webDesignData } from './WebDesign';
import { schoolErpData } from './SchoolErp';
import { ecommerceData } from './Ecommerce';

const productData = {
  'billing': billingData,
  'inventory-management': inventoryManagementData,
  'backend': backendData,
  'push-notification-api': pushNotificationApiData,
  'web-design': webDesignData,
  'school-erp': schoolErpData,
  'ecommerce': ecommerceData,
};

export default productData;
