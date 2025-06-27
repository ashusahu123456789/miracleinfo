import React from 'react';
import { useParams } from 'react-router-dom';

import SchoolErp from './SchoolErp';
import PushNotificationApi from './GhantiAPPEasyNotificationAPP';
import Ecommerce from './Ecommerce';
import InventoryManagement from './OfficeDocumentManagement';
import Billing from './Billing';
import WebDesign from './WebDesign';
import Backend from './Backend';

const productComponents = {
  'school-erp': SchoolErp,
  'push-notification-api': PushNotificationApi,
  'ecommerce': Ecommerce,
  'inventory-management': InventoryManagement,
  'billing': Billing,
  'web-design': WebDesign,
  'backend': Backend,
};

const Products = () => {
  const { id } = useParams();
  const ProductComponent = productComponents[id];

  if (!ProductComponent) {
    return <div>Product not found</div>;
  }

  return <ProductComponent />;
};

export default Products;
