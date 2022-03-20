import Login_pwp from "./components/Login_pwp";
import AddMenu from "./components/AddMenu";
import ViewMenu from "./components/ViewMenu";

export const routes = [
    {
        path: '/',
        name: 'sign-up',
        meta: {layout: 'sign-up'},
        component: Login_pwp
    },
    {
        path: '/AddMenu',
        name: 'sign-up',
        meta: {layout: 'sign-up'},
        component: AddMenu
    },
    {
        path: '/ViewMenu',
        name: 'sign-up',
        meta: {layout: 'sign-up'},
        component: ViewMenu
    },
    // {
    //     path: '/sign-in',
    //     name: 'Signin',
    //     meta: {layout: 'Signin'},
    //     component: Signin
    // },
    // {
    //     path: '/my-profile',
    //     name: 'Profile',
    //     meta: {auth:true, layout: 'default'},
    //     component: Profile
    // },
    // {
    //     path: '/exam2/:schedule_id/:duration/:name',
    //     name: 'MCQView2',
    //     meta: {auth: true, layout: 'MCQView2'},
    //     component: MCQView2
    // },
    //
    // {
    //     path: '/dashboard',
    //     name: 'DashBoard',
    //     meta: {auth:true,layout: 'default'},
    //     component: DashBoard
    // },
    // {
    //     path: '/statistics',
    //     name: 'ViewGraph',
    //     meta: {auth:true,layout: 'default'},
    //     component: ViewGraph
    // },
    // {
    //     path: '/class/:channel_name',
    //     name: 'tvChannel',
    //     meta: {auth:true,layout: 'default'},
    //     component: TvChannel
    // },
    // {
    //     path: '/wait',
    //     name: 'WaitForCreateAcc',
    //     meta: {layout: 'WaitForCreateAcc'},
    //     component: WaitForCreateAcc
    // },
    // {
    //     path: '/Load',
    //     name: 'Load',
    //     meta: {auth:true,layout: 'Load'},
    //     component: Load
    // },
    // {
    //     path: '/Prev-Exams',
    //     name: 'PreviousSchedule',
    //     meta: {auth:true,layout: 'PreviousSchedule'},
    //     component: PreviousSchedule
    // },
    // {
    //     path: '/countdown/:schedule_id/:duration/:name',
    //     name: 'CountDown',
    //     meta: {auth:true,layout: 'CountDown'},
    //     component: CountDown
    // },
    // {
    //     path: '/result/:rank/:schedule/:time/:correct/:mcq/:name',
    //     name: 'ResultPage',
    //     meta: {auth:true,layout: 'ResultPage'},
    //     component: ResultPage
    // },
    // {
    //     path: '/previous/:schedule/:name/:from',
    //     name: 'PreviousScheduleView',
    //     meta: {auth:true,layout: 'PreviousScheduleView'},
    //     component: PreviousScheduleView
    // },
    //
    // {
    //     path: '/released-paper',
    //     name: 'ReleasedPapers',
    //     meta: {auth:true,layout: 'ReleasedPapers'},
    //     component: ReleasedPapers
    // },

];
