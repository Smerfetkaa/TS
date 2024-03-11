import { IVisitor } from './types';
export class CurrentVisitors {
  private visitors: IVisitor[] = [];
  private timer: NodeJS.Timeout | null = null;

  addVisitor(visitor: IVisitor) {
    this.visitors.push(visitor);
  }

  notifyVisitorsAboutClose() {
    this.visitors.forEach(visitor => {
      console.log(`Dear ${visitor}, the zoo will close in 15 minutes `);
    });
  }
  notifyVisitorsAboutEndOfTime() {
    const currentTime = new Date();
    this.visitors.forEach(visitor => {
      // Вважаємо,що кожен квиток діє 4 години з моменту придбання
      if (currentTime.getTime() - visitor.time!.getTime() >= 4 * 60 * 60 * 1000) {
        console.log(`${visitor.name}'s ticket has expired.`);
      }
    });
  }
  startTimer() {
    // таймер, перевіряє час кожні 15 хвилин
    this.timer = setInterval(() => {
      this.checkExpiry();
    }, 15 * 60 * 1000);
  }

  stopTimer() {
    // Зупиняємо таймер, якщо він запущений
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private checkExpiry() {
    const currentTime = new Date();
    this.visitors.forEach(visitor => {
      // Вважаємо що час кожного квитка 4 години
      if (currentTime.getTime() - visitor.time!.getTime() >= 4 * 60 * 60 * 1000) {
        console.log(`${visitor.name}'s ticket has expired.`);
        // Тут можна сповістити відвідувача, що його час закінчився
      }
    });
  }
}
