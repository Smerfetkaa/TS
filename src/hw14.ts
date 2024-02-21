type paymentMethod = 'card' | 'paymentSystem';

class PaymentService {
  processCardPayment(order: Order): boolean {
    // Логіка обробки платежу (в нашому випадку завжди вдалий платіж)
    console.log('Processing card payment for order:', order);
    return true;
  }

  processPaymentSystemPayment(order: Order): boolean {
    // Логіка обробки платежу
    console.log('Processing payment system payment for order:', order);
    return true;
  }
}

class PaymentFacade {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  payWithCard(order: Order) {
    return this.paymentService.processCardPayment(order);
  }

  payWithPaymentSystem(order: Order) {
    return this.paymentService.processPaymentSystemPayment(order);
  }
}
interface Product {
  name: string;
  qty: number;
}
class StorageService {
  checkInventory(order: Order) {
    // складніша логіка перевірки наявності на складі
    let storage: Product[] = [];
    console.log('Checking inventory for order:', order);
    const findItem = storage.find(item => item.name === order.product.name);
    if (findItem) {
      const availableInInventory = findItem?.qty >= order.product.qty;
      if (!availableInInventory) {
        throw new Error('Item out of stock');
      }
    }
  }
}

class DeliveryService {
  deliveryOrder(order: Order) {
    // Логіка відправлення товару, підв'язка служби доставки
    console.log('Delivery address:', order.deliveryAddress);
  }
}

class OrderProcessingFacade {
  private paymentFacade: PaymentFacade;
  private inventoryService: StorageService;
  private deliveryService: DeliveryService;

  constructor() {
    this.paymentFacade = new PaymentFacade();
    this.inventoryService = new StorageService();
    this.deliveryService = new DeliveryService();
  }

  processOrder(order: Order) {
    try {
      switch (order.paymentMethod) {
        case 'card':
          this.paymentFacade.payWithCard(order);
          break;
        case 'paymentSystem':
          this.paymentFacade.payWithPaymentSystem(order);
          break;
        default:
          throw new Error('Invalid payment method');
      }

      this.inventoryService.checkInventory(order);

      this.deliveryService.deliveryOrder(order);

      return 'Completed';
    } catch (error) {
      console.error('Error processing order:', error.message);
      return 'Failed';
    }
  }
}

interface Order {
  product: Product;
  paymentMethod: paymentMethod;
  deliveryAddress: string;
}

// const orderProcessing = new OrderProcessingFacade();

// const order: Order = {
//   product: { name: '', qty: 1 },
//   paymentMethod: 'card',
//   deliveryAddress: '',
// };

// const orderStatus = orderProcessing.processOrder(order);
// console.log('Order processing status:', orderStatus);
