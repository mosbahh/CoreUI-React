export default {
  items: [
    {
      name: "Journeys",
      url: "/dashboard",
      icon: "fa fa-map-o",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      name: "Milestones",
      url: "/milestones",
      icon: "fa fa-flag-checkered"
    },
    {
      name: "Management",
      url: "/management",
      icon: "fa fa-dashboard",
      children: [
        {
          name: "Item 1",
          url: "/management/view1",
          icon: "fa fa-puzzle-piece"
        },
        {
          name: "Item 2",
          url: "/management/view2",
          icon: "fa fa-puzzle-piece"
        },
        {
          name: "Tasks",
          url: "/management",
          icon: "fa fa-tasks"
        }
      ]
    }
  ]
};
