class FadeInObserver {
  constructor() {
    this.observers = [];
  }

  registerObservers(observers) {
    this.observers.push(...observers);
  }

  fadeIn() {
    const scrollPositionY = window.pageYOffset;
    this.observers.forEach((element) => {
      if (element) {
        const { dataset: { triggerpoint } } = element;
        if (triggerpoint < scrollPositionY) {
          element.style.opacity = 1;
          element.style.top = '0px';
        } else {
          element.style.opacity = 0;
          element.style.top = '20px';
        }
      }
    });
  }
}

const fadeInObserver = new FadeInObserver();

export default fadeInObserver;
