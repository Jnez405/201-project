# Software Requirements

## Vision
Our vision is to create a comprehensive and interactive platform that displays pro wrestlers' statistics, including wins, losses, and championships won, years of in-ring experience. This project addresses the need for wrestling fans to easily access and compare detailed performance data of their favorite wrestlers. By providing a user-friendly interface and visually engaging charts, our product enhances the fan experience and offers a centralized source of information.

## Scope (In/Out)
### IN - What will your product do
1. The web app will display detailed stats of pro wrestlers, including wins, losses, and championships won each year.
3. The app will provide a feature to compare stats between different wrestlers, displayed in a chart format.
5. The app will use Chart.js to visualize stats in an engaging and easy-to-understand manner.

### OUT - What will your product not do
1. The website will not include real-time updates or live match tracking.
2. The website will not be developed into an iOS or Android app during this phase.

## Minimum Viable Product (MVP)
- Display pro wrestlers' stats, including wins, losses, and championships.
- Compare stats between wrestlers.
- Visualize data using Chart.js.

### Stretch Goals
- Implement user accounts for personalized experiences and favorite lists.
- Add APIs for real-time data updates.
- Include a feature for user-submitted reviews and ratings for each wrestler.

## Functional Requirements
1. An admin can add, edit, and delete wrestler stats.
2. Users can view detailed profiles of wrestlers.
3. Users can filter wrestler stats by year.
4. Users can compare stats between wrestlers.
5. The system will display stats in chart format using Chart.js.

## Data Flow
1. **User Accesses the Site:**
   - The user navigates to the homepage.
   - The homepage displays a list of wrestlers and their basic stats.
   
2. **Viewing Detailed Stats:**
   - The user clicks on a wrestler's name to view detailed stats.
   - The app fetches and displays the wrestler's stats, including wins, losses, and championships.

3. **Comparing Wrestlers:**
   - The app fetches and displays a comparison chart of the wrestlers' stats.

4. **Data Visualization:**
   - The app uses Chart.js to generate and display charts for the stats.

![Data Flow Diagram](https://raw.githubusercontent.com/Jnez405/201-project/main/img/DataFlow.png)

