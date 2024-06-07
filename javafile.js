document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("*");

    elements.forEach(function(element) {
        element.style.opacity = 0;
    });

    var index = 0;
    var interval = setInterval(function() {
        if (index < elements.length) {
            fadeIn(elements[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 25);

    function fadeIn(element) {
        var opacity = 0;
        var interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 25);
    }

    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var navigation = document.getElementById("menu");
        if (navigation.className === "topnav") {
            navigation.className += " responsive";
        } else {
            navigation.className = "topnav";
        }
    });
});

const units = [
    //Economics
    { name: "Chapter 1 - The Basic Economic Problem", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter1" },
    { name: "Chapter 2 - Supply and Demand", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter2" },
    { name: "Chapter 3 - Organization of products and growth firms", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter3"},
    { name: "Chapter 4 - Introduction to Macroeconomics", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter4"},
    { name: "Chapter 5 - Inflation and Unemployment", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter5"},
    { name: "Chapter 6 - Economic growth", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter6"},
    { name: "Chapter 7 - Macroeconomic policies", link: "mainnavigationpages/Subjects/Subjects.html#economicschapter7"},

    //Physics
    { name: "Physics - Formula Booklet", link: "mainnavigationpages/Subjects/Subjects.html#physicsformulabooklet"},
    { name: "Chapter 1 - Measurements", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter1"},
    { name: "Chapter 2 - Motion and Forces", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter2"},
    { name: "Chapter 3 - Newtons Laws", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter3"},
    { name: "Chapter 4 - Work Power Energy", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter4"},
    { name: "Chapter 5 - Thermal Physics", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter5"},
    { name: "Chapter 6 - Climate Change", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter6"},
    { name: "Chapter 7 - Waves and Optics", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter7"},
    { name: "Chapter 8 - Electricity", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter8"},
    { name: "Chapter 9 - Electromagnetism", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter9"},
    { name: "Chapter 10 - Astrophysics", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter10"},
    { name: "Chapter 11 - Radioactivity", link: "mainnavigationpages/Subjects/Subjects.html#physicschapter11"},

    //Chemistry
    { name: "Chapter 1 - What is Matter?", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter1"},
    { name: "Chapter 2 - How do we use Matter?", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter2"},
    { name: "Chapter 3 - Atomic Structure", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter3"},
    { name: "Chapter 4 - Bonding", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter4"},
    { name: "Chapter 5 - Acids and Alkalis", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter5"},
    { name: "Chapter 6 - Stoichiometry", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter6"},
    { name: "Chapter 7 - Radioactivity", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter7"},
    { name: "Chapter 8 - Redox", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter8"},
    { name: "Chapter 9 - Climate Change", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter9"},
    { name: "Chapter 10 - Thermal Chemistry", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter10"},
    { name: "Chapter 11 - Rate of Reactions and Equilibrium", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter11"},
    { name: "Chapter 12 - Organic Chemistry", link: "mainnavigationpages/Subjects/Subjects.html#chemistrychapter12"},

    //Math
    { name: "Chapter 1 - Algebra", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter1"},
    { name: "Chapter 2 - Surds", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter2"},
    { name: "Chapter 3 - Exponents and Logarithms", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter3"},
    { name: "Chapter 4 - Equations", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter4"},
    { name: "Chapter 5 - Functions and Function Graphs", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter5"},
    { name: "Chapter 6 - Trigonometry", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter6"},
    { name: "Chapter 7 - Coordinate Geometry", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter7"},
    { name: "Chapter 8 - Probability and Sets", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter8"},
    { name: "Chapter 9 - Geometry", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter9"},
    { name: "Chapter 10 - Linear Relations", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter10"},
    { name: "Chapter 11 - Statistics", link: "mainnavigationpages/Subjects/Subjects.html#mathchapter11"},

    //Biology
    { name: "Chapter 1 - How is life organized?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter1"},
    { name: "Chapter 2 - What chemical process supports life?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter2"},
    { name: "Chapter 3 - How do organisms sustain themselves?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter3"},
    { name: "Chapter 4 - What issues do larger organisms face?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter4"},
    { name: "Chapter 5 - What factors affect human health?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter5"},
    { name: "Chapter 6 - Heredity and Genetics", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter6"},
    { name: "Chapter 7 - How have different forms of life arisen?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter7"},
    { name: "Chapter 8 - How are animals adapted to life?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter8"},
    { name: "Chapter 9 - How do species interact?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter9"},
    { name: "Chapter 10 - How do human interactions affect the environment?", link: "mainnavigationpages/Subjects/Subjects.html#biologychapter10"},
    // Add more units for other subjects...
];

function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('s').value.toLowerCase();
    const filteredUnits = units.filter(unit => unit.name.toLowerCase().includes(query));
    if (filteredUnits.length > 0) {
        window.location.href = filteredUnits[0].link;
    } else {
        alert("No matching units found.");
    }
}

function displaySuggestions(filteredUnits) {
    const suggestionBox = document.getElementById('suggestions');
    suggestionBox.innerHTML = '';
    if (filteredUnits.length > 0) {
        suggestionBox.style.display = 'block';
        filteredUnits.forEach(unit => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.innerHTML = `<a href="${unit.link}">${unit.name}</a>`;
            suggestionBox.appendChild(suggestion);
        });
    } else {
        suggestionBox.style.display = 'none';
    }
}

document.getElementById('s').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    if (query.length > 0) {
        const filteredUnits = units.filter(unit => unit.name.toLowerCase().includes(query));
        displaySuggestions(filteredUnits);
    } else {
        document.getElementById('suggestions').style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    const suggestionBox = document.getElementById('suggestions');
    if (!suggestionBox.contains(event.target) && event.target.id !== 's') {
        suggestionBox.style.display = 'none';
    }
});
