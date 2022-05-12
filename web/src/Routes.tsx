// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import FragmentsLayout from 'src/layouts/FragmentsLayout'
import TimelineLayout from './layouts/TimelineLayout/TimelineLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/content" page={ContentPage} name="content" />
      <Route path="/grid" page={GridPage} name="grid" />
      <Route path="/upload" page={UploadPage} name="upload" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/about" page={AboutPage} name="about" />
      <Set wrap={FragmentsLayout}>
        <Route path="/fragments/new" page={FragmentNewFragmentPage} name="newFragment" />
        <Route path="/fragments/{id:Int}/edit" page={FragmentEditFragmentPage} name="editFragment" />
        <Route path="/fragments/{id:Int}" page={FragmentFragmentPage} name="fragment" />
        <Route path="/fragments" page={FragmentFragmentsPage} name="fragments" />
      </Set>
      <Set wrap={TimelineLayout}>
        <Route path="/timeline" page={TimelinePage} name="timeline" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
