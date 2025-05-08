<?php
$cards = [
  ["title" => "Card 1", "desc" => "Description for card 1", "img" => "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI"],
  ["title" => "Card 2", "desc" => "Description for card 2", "img" => "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"],
  ["title" => "Card 3", "desc" => "Description for card 3", "img" => "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Card Popup</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <?php foreach ($cards as $index => $card): ?>
      <div class="card" data-index="<?= $index ?>">
        <img src="<?= $card['img'] ?>" alt="<?= $card['title'] ?>">
        <h3><?= $card['title'] ?></h3>
        <p><?= $card['desc'] ?></p>
      </div>
    <?php endforeach; ?>
  </div>

  <div class="popup" id="popup">
    <span class="close" id="close">&times;</span>
    <div class="popup-content" id="popup-content">
      <!-- JS will populate content -->
    </div>
  </div>

  <script>
    const cardData = <?= json_encode($cards) ?>;
  </script>
  <script src="script.js"></script>
</body>
</html>
