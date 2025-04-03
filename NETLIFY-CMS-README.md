# Netlify CMS Integration for Precision Finish

This document explains how to use Netlify CMS to edit the content of your Precision Finish website.

## Overview

Netlify CMS has been integrated into your website, allowing you to edit content through a user-friendly admin interface. The CMS is accessible at `/admin` and uses Netlify Identity for authentication.

## Getting Started

### 1. Deploy to Netlify

1. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/) if you don't have one already
2. From your Netlify dashboard, click "New site from Git"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket) and select your repository
4. Configure the build settings:
   - Build command: Leave empty (or use `# no build command`)
   - Publish directory: `.` (the root of the project)
5. Click "Deploy site"

### 2. Enable Netlify Identity

1. Once your site is deployed, go to the site settings in your Netlify dashboard
2. Navigate to "Identity" and click "Enable Identity"
3. Under "Registration preferences", select "Invite only"
4. Under "External providers", you can enable login with Google, GitHub, etc. (optional)
5. Under "Services", enable "Git Gateway" to allow Netlify CMS to access your repository

### 3. Invite Users

1. In the Identity tab, click "Invite users"
2. Enter your email address and click "Send"
3. Check your email for the invitation and follow the link to set up your account

## Using the CMS

1. Navigate to your website's `/admin` path (e.g., `https://your-site-name.netlify.app/admin`)
2. Log in with your Netlify Identity credentials
3. You'll see the Netlify CMS dashboard with collections for:
   - Pages (Home, About, Contact)
   - Services
   - Blog Posts
   - Testimonials
   - Projects

## Content Collections

### Pages

Edit the main pages of your website, including:
- Home page (hero section, services overview, why choose us, CTA)
- About page (company information, team members)
- Contact page (contact information, form settings)

### Services

Manage your service pages. You can:
- Edit existing service pages
- Create new service pages
- Delete services you no longer offer

Each service includes:
- Title and meta description
- Featured image
- Service content
- Features list
- FAQ section

### Blog Posts

Manage your blog content. You can:
- Create new blog posts
- Edit existing posts
- Schedule posts for future publishing

Each blog post includes:
- Title and meta description
- Featured image
- Publish date
- Author
- Content (with rich text editor)
- Tags

### Testimonials

Manage client testimonials. You can:
- Add new testimonials
- Edit existing testimonials
- Remove outdated testimonials

Each testimonial includes:
- Client name
- Client type (e.g., Residential Client, Commercial Client)
- Client photo (optional)
- Testimonial text
- Rating (1-5 stars)
- Date

### Projects

Manage your portfolio of completed projects. You can:
- Add new projects
- Edit existing projects
- Mark projects as featured to display on the home page

Each project includes:
- Project title
- Project type (interior, exterior, cabinet, custom, commercial)
- Project image
- Project description
- Featured status

## Media Management

When you upload images through the CMS, they will be stored in the `/images/uploads` directory. You can:
- Upload new images
- Select from previously uploaded images
- Delete unused images

## Need Help?

If you encounter any issues with the CMS, please refer to the [Netlify CMS documentation](https://www.netlifycms.org/docs/intro/) or contact your web developer for assistance.