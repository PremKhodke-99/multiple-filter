<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple filters</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="filters">
        <div id="dateFilter" class="filter-group" data-type="date">
            <span data-value="all" class="active">All</span>
            <span data-value="upcoming">Upcoming</span>
            <span data-value="past">Past</span>
        </div>
        <div id="typeFilter" class="filter-group" data-type="type">
            <span data-value="all" class="active">All</span>
            <span data-value="industrial">Industrial</span>
            <span data-value="commercial">Commercial</span>
        </div>
    </div>

    <div id="cardContainer" class="card-container"></div>

    <script src="script.js"></script>
</body>

</html>