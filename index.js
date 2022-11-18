const clock = document.getElementById("clock");
    

    function getClock(){
        const date = new Date();
        const hour = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0");//number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
        clock.innerText = `${hour}:${minutes}:${second}`;
        }
      getClock();
      setInterval(getClock, 1000);
