// Function handle Khu vuc
function validate_kv (kv) {
    var check_kv;
    var error = document.getElementById('result1').innerHTML = 'Nhap lai diem';

    // Validate invalid data
    if ( m1 == 0 || m2 == 0 || m3 == 0 ) {
        error;
        return error;
    // Assignments
    } else {
        switch (kv) {
            case 0:
                check_kv = 0
                break;
            case 1:
                check_kv = 2
                break;
            case 2:
                check_kv = 1
                break;
            case 3:
                check_kv = 0.5
                break;
        }
        return check_kv;
    }
}

// Function handle Doi tuong
function validate_dt (dt){
    var check_dt;

    // Assignments
    switch (dt) {
        case 0:
            check_dt = 0
            break;
        case 1:
            check_dt = 2.5
            break;
        case 2:
            check_dt = 1.5
            break;
        case 3:
            check_dt = 1
            break;
    }
    return check_dt;
}

var kq = document.getElementById('kq');
kq.onclick = function () {
    // Get data
    var dc = document.getElementById('dc').value*1;
    var kv = document.getElementById('kv').value*1;
    var dt = document.getElementById('dt').value*1;
    var m1 = document.getElementById('m1').value*1;
    var m2 = document.getElementById('m2').value*1;
    var m3 = document.getElementById('m3').value*1;
    var diem = 0;

    // Call handle data function
    var check_kv = validate_kv(kv);
    var check_dt = validate_dt(dt);    

    // Calculate data
    diem = m1 + m2 + m3 + check_kv + check_dt;

    // Validate with requirements -> Print out
    if ( diem >= dc ) {
        document.getElementById('result1').innerHTML = 'Diem: ' + diem + '. Ban da dau';
    } else {
        document.getElementById('result1').innerHTML = 'Diem: ' + diem + '. Ban da rot';
    }
}

// Bai 2
// Function handle data
function calculate(kw) {
    var tien = 0;

    // Validate invalid data
    if ( kw < 0 ) {
        document.getElementById('result2').innerHTML = 'Nhap lai';
    } else {
    // Calculate currency with requirements
        if ( kw <= 50 ) {
            tien = kw * 500;
        } else if ( 50 < kw  && kw <= 100 ) {
            tien = 50* 500 + 650*(kw - 50)
        }else if ( 100 < kw && kw <= 200 ) {
            tien = 50*500 + 650*50 + 850*(kw-100)
        }else if ( kw < 200 && kw <= 350 ) {
            tien = 50*500 + 650*50 + 850*100 + 1100*(kw-150);
        } else {
            tien = 50*500 + 650*50 + 850*100 + 1100*150 + 1300*kw
        }
    }
    return tien;
}

var read = document.getElementById('read');
read.onclick = function () {
    // Get data
    var name = document.getElementById('name').value;
    var kw = document.getElementById('kw').value*1;
    
    // Call function
    var tien = calculate(kw)

    // Print out
    document.getElementById('result2').innerHTML = 'Ten: ' + name + ' . Tien dien: ' + tien;
}