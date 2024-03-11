export class Revenue {
  private static revenue: number = 0;

  updateRevenue(price: number) {
    Revenue.revenue += price;
  }

  static getDailyRevenue() {
    return this.revenue;
  }

  static resetDailyRevenue() {
    this.revenue = 0;
  }
}
