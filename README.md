# Resume - Free Next.js Resume Website Template
#### Preview

 - [Demo](https://themewagon.github.io/Resume-Nextjs/)

#### Download
 - [Download from ThemeWagon](https://themewagon.com/themes/resume-nextjs/)


## Getting Started

Clone from GitHub 
```bash
git clone https://github.com/themewagon/Resume-Nextjs.git
```

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Author

Design and code are written by the getnextjstemplates design & development team.  


## License

 - Design and Code is Copyright &copy; [getnextjstemplates](https://getnextjstemplates.com/)
 - Licensed under [MIT]
 - Distributed by [ThemeWagon](https://themewagon.com)

## Recent Updates

### Data Migration (Jan 2026)
- **Education and Skills Data**: The data handling logic for the "Education & Skills" section has been migrated from fetching `public/data/page-data.json` to importing directly from `src/app/personal/personal.tsx`.
- **Breaking Change**: The `EducationSkills` component no longer relies on external JSON files for data. Any updates to education or skills should now be made in `src/app/personal/personal.tsx`.

### Image Handling
- **Skills Icons**: The project now uses PNG icons for skills (React, Next.js, etc.) located in `public/images/home/education-skill/`. The `personal.tsx` file has been updated to reference these new images.
