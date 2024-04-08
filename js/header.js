function sidebarFunc() {
    //! Home Sidebar START

    const btnOpenSideBar = document.querySelector("#btn-menu");
    const btnCloseSideBar = document.querySelector("#close-sidebar");
    const sideBar = document.querySelector("#side-bar");

    btnOpenSideBar.addEventListener("click", function () {
        sideBar.style.left = "0";
    });

    btnCloseSideBar.addEventListener("click", function () {
        sideBar.style.left = "-100%";
    });

    //* Click Outside START

    document.addEventListener("click", (event) => {
        if (
            !event.composedPath().includes(sideBar) &&
            !event.composedPath().includes(btnOpenSideBar)
        ) {
            sideBar.style.left = "-100%";
        }
    });

    //* Click Outside END

    //! Home Sidebar END
}

function searchModalFunc() {
    //! Search Modal START

    const btnOpenSearch = document.querySelector(".search-button");
    const btnCloseSearch = document.querySelector("#close-search");
    const modalSearch = document.querySelector(".modal-search");
    const modalSearchWrapper = document.querySelector(".modal-wrapper");

    btnOpenSearch.addEventListener("click", () => {
        modalSearch.style.visibility = "visible";
        modalSearch.style.opacity = "1";
    });

    btnCloseSearch.addEventListener("click", () => {
        modalSearch.style.visibility = "hidden";
        modalSearch.style.opacity = "0";
    });

    //* Click Outside START

    document.addEventListener("click", (e) => {
        if (
            !e.composedPath().includes(modalSearchWrapper) &&
            !e.composedPath().includes(btnOpenSearch)
        ) {
            modalSearch.style.visibility = "hidden";
            modalSearch.style.opacity = "0";
        }
    });

    //* Click Outside END

    //! Search Modal END
}

function headerFunc() {
    sidebarFunc();
    searchModalFunc();
}

export default headerFunc();
