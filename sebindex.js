//카카오 api 

// 지도를 생성합니다
var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
    center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
    level: 14 // 지도의 확대 레벨 
});


// 지도에 마커를 표시합니다 
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

$.get("통합데이터.csv", function(data) {
    // 데이터에서 좌표a 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    var mrkers = $(data).map(function(i, position) {
        return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.wgs84Lat, position.wgs84Lon)
        });
    });

    clusterer.addMarkers(markers);
});