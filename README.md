# Precision Finish - Professional Painting Website

A high-end converting website for an Exterior & Interior painting business.
Deployed on Netlify for easy content management.

## Overview

This website is designed to showcase the services of Precision Finish, a professional painting company specializing in interior and exterior painting, cabinet refinishing, custom finishes, and commercial painting services. The website is built with HTML, CSS, and JavaScript, making it easy to host and maintain.

## Features

- Responsive design that works on all devices (desktop, tablet, mobile)
- Modern, professional aesthetic with high-converting elements
- Service pages with detailed information about each service
- Project gallery with filtering functionality
- Contact form for quote requests
- About page with company information, team members, and values
- Testimonials from satisfied customers

## File Structure

```
Precision Finish/
├── index.html              # Homepage
├── services.html           # Services page
├── gallery.html            # Project gallery
├── about.html              # About the company
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image directory
│   └── README.txt          # Image requirements
└── README.md               # This file
```

## Getting Started

1. **Add Images**: Before launching the website, you need to add your own images to the `images` folder. See `images/README.txt` for specific image requirements and dimensions.

2. **Customize Content**: Update the content in the HTML files to reflect your specific business information:
   - Company name and contact details
   - Service descriptions
   - Team member information
   - Project gallery items
   - Testimonials

3. **Update Colors (Optional)**: If you want to change the color scheme, edit the CSS variables at the top of the `css/styles.css` file:
   ```css
   :root {
       --primary-color: #2c3e50;
       --secondary-color: #e67e22;
       --accent-color: #3498db;
       /* other variables */
   }
   ```

4. **Testing**: Open the `index.html` file in a web browser to preview the website. Test all links, forms, and responsive behavior.

5. **Deployment**: Upload all files to your web hosting provider to make the website live.

## Browser Compatibility

This website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)

## Customization Options

### Adding New Services

To add a new service:
1. Add a new section to the `services.html` file following the existing pattern
2. Add a link to the new service in the navigation and footer menus
3. Add corresponding images to the `images` folder

### Adding Gallery Items

To add new projects to the gallery:
1. Add new items to the gallery grid in `gallery.html`
2. Follow the existing HTML structure for consistency
3. Add corresponding images to the `images` folder

## Contact Form Setup

The contact form is currently set up for demonstration purposes only. To make it functional:

1. Create a server-side script to process form submissions (PHP, Node.js, etc.)
2. Update the form action in `contact.html` to point to your processing script
3. Configure email notifications for form submissions

## License

This website template is provided for the exclusive use of Precision Finish. Unauthorized distribution or use is prohibited.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Images should be replaced with your own before publishing

## Support

For any questions or support needs, please contact your web developer.