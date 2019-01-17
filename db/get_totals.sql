SELECT SUM (calories) AS totalCalories,
SUM (fat) AS totalFat,
SUM (carbohydrates) AS totalCarbohydrates,
SUM (protein) AS totalProtein
FROM foodlog
WHERE user_id = ${user_id}
AND
date = ${date};