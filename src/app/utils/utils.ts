export class UTILS {

  static userData = JSON.parse(localStorage.getItem('user'));

  static getCurrentTime(): String {
      const currentTime = new Date().toLocaleTimeString();
      return currentTime;
  }

  static getDaytimeGreeting(): String {
      const currentDate = Date.now();
      const date = new Date(currentDate);
      const hours = date.getHours();
      if (hours > 17) {
          return 'Good evening!';
      } else if (hours > 11) {
          return 'Hey there, busy bee!';
      } else if (hours > 4) {
          return 'Good morning!';
      } else { return 'Hey there, night owl!'; }
  }

  static getDisplayName(): string {
      return this.userData['displayName'];
  }

  static getScreenWidth(): number {
      return window.innerWidth;
  }
}
