document.getElementById("select-grade").addEventListener("change", () => {
    if (document.getElementById("select-grade").value == 1) {
        document.getElementById("grade-table").innerHTML = table1;
    }
    if (document.getElementById("select-grade").value == 2) {
        document.getElementById("grade-table").innerHTML = table2;
    }
    if (document.getElementById("select-grade").value == 3) {
        document.getElementById("grade-table").innerHTML = table3;
    }
    if (document.getElementById("select-grade").value == 4) {
        document.getElementById("grade-table").innerHTML = table4;
    }
});

const table1 = `<table>
                <tr>
                    <th>COURSE NO.</th>
                    <th>COURSE NAME</th>
                    <th>CREDITS</th>
                    <th>GRADE</th>
                </tr>
                <tr>
                    <td>001101</td>
                    <td>FUNDAMENTAL ENGLISH 1</td>
                    <td>3</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>206113</td>
                    <td>CAL FOR SOFTWARE TECH</td>
                    <td>3</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>261111</td>
                    <td>INTENET AND SOFTWARE COMMUNITY</td>
                    <td>3</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>951100</td>
                    <td>MODERN LIFE AND ANIMATION</td>
                    <td>3</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>953100</td>
                    <td>COMPUTERS AND PROGRAMMING</td>
                    <td>2</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>955102</td>
                    <td>DIGITAL LITERACY</td>
                    <td>2</td>
                    <td>C+</td>
                </tr>
                <tr>
                    <td>955103</td>
                    <td>PROGRAMMING LOGICAL THINKING</td>
                    <td>2</td>
                    <td>C+</td>
                </tr>
                <tr>
                    <td>SUMMARY</td>
                    <td>TOTAL CREDITS</td>
                    <td>CREDITS RECEIVED</td>
                    <td>GPA</td>
                </tr>
                <tr>
                    <td>THIS SEMESTER</td>
                    <td>18</td>
                    <td>18</td>
                    <td>2.64</td>
                </tr>
            </table>
            <h1>Total GPAX: 2.64</h1>
            `;

const table2 = `<table>
                <tr>
                    <th>COURSE NO.</th>
                    <th>COURSE NAME</th>
                    <th>CREDITS</th>
                    <th>GRADE</th>
                </tr>
                <tr>
                    <td>001102</td>
                    <td>FUNDAMENTAL ENGLISH 2</td>
                    <td>3</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>140104</td>
                    <td>CITIZENSHIP</td>
                    <td>3</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>206281</td>
                    <td>DISCRETE MATHEMATICS</td>
                    <td>3</td>
                    <td>D+</td>
                </tr>
                <tr>
                    <td>953102</td>
                    <td>ADT & PROBLEM SOLVING</td>
                    <td>3</td>
                    <td>W</td>
                </tr>
                <tr>
                    <td>953202</td>
                    <td>INTRODUCTION TO SE</td>
                    <td>3</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>953211</td>
                    <td>COMPUTER ORGANIZATION</td>
                    <td>3</td>
                    <td>W</td>
                </tr>
                <tr>
                    <td>953231</td>
                    <td>OBJECT ORIENTED PROGRAMMING</td>
                    <td>3</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>SUMMARY</td>
                    <td>TOTAL CREDITS</td>
                    <td>CREDITS RECEIVED</td>
                    <td>GPA</td>
                </tr>
                <tr>
                    <td>THIS SEMESTER</td>
                    <td>21</td>
                    <td>15</td>
                    <td>2.00</td>
                </tr>
            </table>
            <h1>Total GPAX: 2.35</h1>`;

const table3 = `<table>
                <tr>
                    <th>COURSE NO.</th>
                    <th>COURSE NAME</th>
                    <th>CREDITS</th>
                    <th>GRADE</th>
                </tr>
                <tr>
                    <td>001201</td>
                    <td>CRIT READ AND EFFEC WRITE</td>
                    <td>3</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>011269</td>
                    <td>PHIL OF SUFFICIENCY ECON</td>
                    <td>3</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>208263</td>
                    <td>ELEMENTARY STATISTICS</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>953212</td>
                    <td>DB SYS & DB SYS DESIGN</td>
                    <td>3</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>953233</td>
                    <td>ADVANCED PROGRAMMING</td>
                    <td>3</td>
                    <td>C+</td>
                </tr>
                <tr>
                    <td>953251</td>
                    <td>HFAC IN DIGI INTERACT DESIGN</td>
                    <td>3</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>SUMMARY</td>
                    <td>TOTAL CREDITS</td>
                    <td>CREDITS RECEIVED</td>
                    <td>GPA</td>
                </tr>
                <tr>
                    <td>THIS SEMESTER</td>
                    <td>18</td>
                    <td>18</td>
                    <td>3.00</td>
                </tr>
            </table><h1>Total GPAX: 2.58</h1>`;

const table4 = `<table>
                <tr>
                    <th>COURSE NO.</th>
                    <th>COURSE NAME</th>
                    <th>CREDITS</th>
                    <th>GRADE</th>
                </tr>
                <tr>
                    <td>001225</td>
                    <td>ENGL IN SCIENCE & TECH CONT</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>013110</td>
                    <td>PSYCHOLOGY AND DAILY LIFE</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>206225</td>
                    <td>MATH FOR SOFTWARE TECH</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>953102</td>
                    <td>ADT & PROBLEM SOLVING</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>953211</td>
                    <td>COMPUTE ORGANIZATION</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>953234</td>
                    <td>DEV OPS</td>
                    <td>3</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>SUMMARY</td>
                    <td>TOTAL CREDITS</td>
                    <td>CREDITS RECEIVED</td>
                    <td>GPA</td>
                </tr>
                <tr>
                    <td>THIS SEMESTER</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </table><h1>Total GPAX: 2.58</h1>`;
