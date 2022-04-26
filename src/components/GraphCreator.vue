<template>
    <label for="game">Choose a game:</label>
    <select v-model="option" name="game" id="optionSelector">
        <option value="minesweeper">Minesweeper</option>
        <option value="wordsearch">Wordsearch</option>
        <option value="snake">Snake</option>
    </select>
    <div id="graphDiv">
        <p>Graph Div</p>
    </div>
</template>

<script>
    import $ from 'jquery';
    import accessHighscores from '@/../public/scripts/access_highscores.js';
    import '@/../public/stylesheets/graphs.css';
    import * as d3 from 'd3';
    
    export default {
        name: "GraphCreator",
        data(){
            return {
                option: "",
            }
        },
        methods: {
            startup(){
                $("option").click(() => {
                    this.updateGraph();
                })
            },
            async updateGraph(){
                const LIMIT = 5;
                let game = this.option;
                //accessHighscores.doNothing();
                let graphData = await accessHighscores.getTopHighScores(game, LIMIT);
                let currentGraph = document.getElementById("graph");
                
                // if there is a graph present on the screen then remove it
                if (currentGraph != null){
                    currentGraph.remove()
                }

                // If no data return
                if (graphData.length == 0){
                    return;
                }

                // data exists

                const GRAPH_WIDTH = 500;
                const GRAPH_HEIGHT = 500;
                const MARGIN = 40;

                // Create the graph element
                let svg = d3.select("#graphDiv")
                    .append("svg")
                        .attr("width", GRAPH_WIDTH)
                        .attr("height", GRAPH_HEIGHT)
                        .attr("id", "graph");

                // Setup the scales
                let xScale = d3.scaleBand()
                    .domain(graphData.map( (entry) => entry.user_id))
                    .range([MARGIN * 2, GRAPH_WIDTH - MARGIN])
                    .padding(0.5);
                const xAxis = d3.axisBottom(xScale);
                //const MAX_SCORE = Math.max(graphData.map( (entry) => entry[game]));
                let MAX_SCORE = graphData[0][game];
                for (let i = 0; i < graphData.length; i++){
                    if (graphData[i][game] > MAX_SCORE){
                        MAX_SCORE = graphData[i][game];
                    }
                }
                console.log(MAX_SCORE)
                const yScale = d3.scaleLinear()
                    .domain([0, MAX_SCORE])
                    .range([GRAPH_HEIGHT - MARGIN, MARGIN]);
                const yAxis = d3.axisLeft(yScale).ticks(10);

                // Add rectangles to graph
                console.log("test", graphData[0][game])
                svg.selectAll("rect")
                    .data(graphData)
                    .enter()
                        .append("rect")
                            .attr("x", (entry) => xScale(entry.user_id))
                            .attr("y", (entry) => yScale(entry[game]))
                            .attr("width", xScale.bandwidth())
                            .attr("height", (entry) => yScale(0) - yScale(entry[game]))
                            .attr("fill", () => "#0000FF");

                svg.append("g").attr("class", "x-axis").attr("transform", `translate(0,${GRAPH_WIDTH - MARGIN})`).call(xAxis);
                svg.append("g").attr("class", "y-axis").attr("transform", `translate(${MARGIN * 2},0)`).call(yAxis);

                
                // Create the y axis label
                svg.append("text").attr("transform", `rotate(-90) translate(${-GRAPH_HEIGHT * 3 / 4}, ${MARGIN / 2})`).text("Score");

                // Create the x axis label
                svg.append("text").attr("x", GRAPH_WIDTH * 4 / 10).attr("y", GRAPH_HEIGHT).text("Users");

                // Graph Title
                svg.append("text").attr("x", GRAPH_WIDTH * 1 / 10).attr("y", MARGIN).text(`TOP ${LIMIT} USERS`);

            }
        }, 
        mounted(){
            // Call Start Up Code
            this.$nextTick(() => {
                this.startup();
            })
        },
    }
</script>