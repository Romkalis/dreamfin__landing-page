import { CountUp } from "../../../node_modules/countup.js/dist/countUp.js";

const counters = document.querySelectorAll('.counters__item-value');

if(counters.length > 0) {

    const options = {
        duration: 3,                        // сколько секунд длится отсчет
        decimal: '',
    };
    
    // Функция запуска счетчика 
    const startCounting = (counter) => {
        let startCount = new CountUp(
            counter,                        // элемент который анимируем
            Number(counter.textContent),    // значение берем из элемента
            options                         // опции, объект, настройки библиотеки
        );
    
        if (!startCount.error) {
            startCount.start();
        } else {
            console.error(startCount.error);
        }
    }
    
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3, 
    }
    
    const countersObserve = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => startCounting(counter));
                // Остановить наблюдателя после запуска счетчиков, если нужно
                observer.unobserve(entry.target);
            }
        });
    }
    
    
    const observer = new IntersectionObserver(countersObserve, observerOptions);
    
    // Наблюдаем за элементом с классом '.counters'
    observer.observe(document.querySelector('.counters'));

}

