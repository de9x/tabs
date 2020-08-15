function tabs(wrapperClassName, tabContentClassName) {
    let wrapper = document.querySelector("." + wrapperClassName),
        tabContent = document.querySelectorAll("." + tabContentClassName);

    let activeTabIndex = 0,
        tabActiveClassName = tabContentClassName + "_active",
        wrapperTabs = wrapper.children;
    
    wrapper.addEventListener("click", (e) => {
        let target = e.target;
        if (target) {
            for (let i = 0; i < wrapperTabs.length; ++i) {
                if (wrapperTabs[i] == target) {
                    tabContent[activeTabIndex].classList.remove(tabActiveClassName);
                    activeTabIndex = i;
                    tabContent[activeTabIndex].classList.add(tabActiveClassName);
                }
            }
        }
    });
}

tabs("info__wrapper", "info__tab-content");

