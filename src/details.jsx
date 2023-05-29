import React, { Component } from "react";
import Pagination from "./pagination";
import { paginate } from "./paginate";
import DetailsTable from "./detailsTable";
import config from "./config.json";
import { getUser } from "./detailsService";
import httpService from "./httpService";
class Details extends Component {
    state = {
        user: [],
        currentPage: 1,
        pageSize: 5,
        searchQuery: "",

    }
    async componentDidMount() {
        try {
            const { data: user } = await httpService.get(config.apiUrl)
            this.setState({ user })
        }

        catch (ex) {
            if (ex.response && ex.response.status === 404)
                console.log("error  occured")
        }
    }
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }
    getPagedData = () => {
        let filtered = this.state.user
        // if (this.state.searchQuery)
        //     filtered = this.state.user.filter(item => { return Object.keys(item).some(key => item[key].toLowerCase().startsWith(this.state.searchQuery.toLowerCase())) })
        const user = paginate(filtered, this.state.currentPage, this.state.pageSize)

        return { user }
    }

    render() {
        const { user } = this.getPagedData()
        const { currentPage, pageSize } = this.state;
        return (
            <div>
                <DetailsTable users={user} />
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col">
                        <Pagination itemsCount={this.state.user.length}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}

                        />
                    </div>
                </div></div>
        )

    }
}
export default Details;