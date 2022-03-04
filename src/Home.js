// how to sell drugs fast
// slick road story
// oil movie buy that fat guy
// limitless

// rhinestone eyes
// all my friends are toxic
// some say say you'll love me one day

// describe your product @imsh4yy (describe product and show landing page)
// take a pic of every coffee you take while building a product (or your portfolio)

// what do you think ?
// is it better to put 10 average projects in your portfolio
// or just 2 or 3 great projects ?
// cointity or quality ?

import React from 'react'
import HomeNav from "./HomeNav"
import HomeForm from "./HomeForm"

function Home() {
  // when the home element renders we will clear the username
  localStorage.removeItem("firstName")
  localStorage.removeItem("secondName")
  return (
    <div className="App">
      <HomeNav />
      <div className="main_section">
      <div className="write_name_section">
        <h2>generate a username like the one famous influencers and brands has</h2>
        <HomeForm />
      </div>
      <div className="info_page">
        <div>choose your username</div>
        <div>why we are better than 90% of other username providers</div>
        <div>FAQ</div>
      </div>
      </div>
    </div>
  );
}

export default Home;
