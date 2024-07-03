
// const fetcher = (...args) => fetch(...args).then(res => res.json())

const CountryListApi = (param = "all") => {
    try {
        return fetch(`https://restcountries.com/v3.1/${param}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return data;
            });
    } catch (error) {
        return "Something went wrong!";
    }
};

const AlbumLibraryApiWithAsync = async (prm1: any) => {
    try {
        console.log("prm1 in helper method :: ", prm1);

        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();//undefined
        return filterData(data)
        // return data;
    } catch (error) {
        return "Something went wrong!";
    }
};


const filterData = (data: any) => {
    return data;
}


export {
    CountryListApi,
    AlbumLibraryApiWithAsync
}