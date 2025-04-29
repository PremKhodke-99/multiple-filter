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
        <div id="dateFilter" class="filter-group">
            <span data-value="all" class="active">All</span>
            <span data-value="upcoming">Upcoming</span>
            <span data-value="past">Past</span>
        </div>
        <div id="typeFilter" class="filter-group">
            <span data-value="all" class="active">All</span>
            <span data-value="industrial">Industrial</span>
            <span data-value="commercial">Commercial</span>
        </div>
        <!-- <select id="dateFilter">
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
        </select> -->

        <!-- <select id="typeFilter">
            <option value="all">All</option>
            <option value="industrial">Industrial</option>
            <option value="commercial">Commercial</option>
        </select> -->
    </div>

    <div id="cardContainer" class="card-container"></div>

    <script src="script.js"></script>
</body>

</html>