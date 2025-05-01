<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pop up</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php include '../components/header.php'; ?>
    <div class="img-container">
        <div>
            <img src="https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4" alt="" srcset="">
        </div>
        <div>
            <img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" alt="" srcset="">
        </div>
    </div>
    <div id="popup" style="display: none;">
        <div id="popup-header">
            <span id="close">&times;</span>
            <h2>Image Viewer</h2>
        </div>
        <div id="popup-content">
            <button id="prev">&#10094;</button>
            <img id="popup-img" src="" alt="">
            <button id="next">&#10095;</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>