import {Component} from "solid-js"

const Table: Component = () => {
    return(
        <table class="overflow-x-auto table">
            <thead>
                <tr> 
                    <th>Grade</th>
                    <td>Gakka</td>
                    <td>description</td>
                </tr>
            </thead>
            <tbody>
                <tr class="hover">
                    <th>1</th>
                    <td>EP</td>
                    <td>aaa</td>
                </tr>
                <tr class="hover">
                    <th>2</th>
                    <td>FM</td>
                    <td>bbb</td>
                </tr>
                <tr class="hover">
                    <th>3</th>
                    <td>EP</td>
                    <td>ccc</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table