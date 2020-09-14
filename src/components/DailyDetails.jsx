import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const DailyDetails = () => {



    return (
        <div className="row pr-5 pl-5 m-0">
            <div className="col-12">
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Orari</TableCell>
                            <TableCell>dato 1</TableCell>
                            <TableCell>dato 2</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow key={1}>
                            <TableCell>1</TableCell>
                            <TableCell>aaa</TableCell>
                            <TableCell>bbb</TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell>2</TableCell>
                            <TableCell>ccc</TableCell>
                            <TableCell>ddd</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </div>
        </div>
    );
}

export default DailyDetails;