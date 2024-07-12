document.addEventListener('DOMContentLoaded', () => {
    const wrestlers = [
        {
            name: 'John Cena',
            wins: 1805,
            losses: 436,
            championships: 51,
            years: 24,
            color: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        },
        {
            name: 'The Rock',
            wins: 453,
            losses: 355,
            championships: 33,
            years: 20,
            color: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'
        },
        {
            name: 'Rey Mysterio',
            wins: 1610,
            losses: 689,
            championships: 44,
            years: 35,
            color: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)'
        },
        {
            name: 'Eddie Guerrero',
            wins: 823,
            losses: 612,
            championships: 20,
            years: 19,
            color: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)'
        },
        {
            name: 'Randy "Macho Man" Savage',
            wins: 1189,
            losses: 906,
            championships: 21,
            years: 27,
            color: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)'
        }
    ];

    // Calculate rating points for each wrestler
    wrestlers.forEach(wrestler => {
        wrestler.points = (wrestler.wins * 2) + (wrestler.losses * -1) + (wrestler.championships * 5) + wrestler.years;
        wrestler.maxPoints = (wrestler.wins * 2) + (wrestler.championships * 5) + wrestler.years;
        wrestler.rating = Math.round((wrestler.points / wrestler.maxPoints) * 100);
    });

    const wrestlersSection = document.getElementById('wrestlers');
    const ctx = document.getElementById('winsChart').getContext('2d');

    const addWrestlerForm = document.getElementById('addWrestlerForm');
    addWrestlerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const wins = parseInt(event.target.wins.value);
        const losses = parseInt(event.target.losses.value);
        const championships = parseInt(event.target.championships.value);
        const years = parseInt(event.target.years.value);

        const newWrestler = {
            name,
            wins,
            losses,
            championships,
            years,
            color: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'
        };

        newWrestler.points = (newWrestler.wins * 2) + (newWrestler.losses * -1) + (newWrestler.championships * 5) + newWrestler.years;
        newWrestler.maxPoints = (newWrestler.wins * 2) + (newWrestler.championships * 5) + newWrestler.years;
        newWrestler.rating = (newWrestler.points / newWrestler.maxPoints) * 100;

        wrestlers.push(newWrestler);

        updateWrestlersSection();
        updateChart();
    });

    function updateWrestlersSection() {
        wrestlersSection.innerHTML = '';
        wrestlers.forEach(wrestler => {
            const wrestlerCard = document.createElement('div');
            wrestlerCard.className = 'wrestler-card';
            wrestlerCard.innerHTML = `
                <h2>${wrestler.name}</h2>
                <p>Wins: ${wrestler.wins}</p>
                <p>Losses: ${wrestler.losses}</p>
                <p>Championships: ${wrestler.championships}</p>
                <p>Years: ${wrestler.years}</p>
                <p>Rating: ${wrestler.rating}</p>
            `;
            wrestlersSection.appendChild(wrestlerCard);
        });
    }

    function updateChart() {
        winsChart.data.labels = wrestlers.map(w => w.name);
        winsChart.data.datasets[0].data = wrestlers.map(w => w.rating);
        winsChart.data.datasets[0].backgroundColor = wrestlers.map(w => w.color);
        winsChart.data.datasets[0].borderColor = wrestlers.map(w => w.borderColor);
        winsChart.update();
    }

    // Initial render
    updateWrestlersSection();
    const winsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: wrestlers.map(w => w.name),
            datasets: [{
                label: 'Rating',
                data: wrestlers.map(w => w.rating),
                backgroundColor: wrestlers.map(w => w.color),
                borderColor: wrestlers.map(w => w.borderColor),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
