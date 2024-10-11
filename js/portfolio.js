const dataField = 'data-project-group';
const hideClass = 'projects__project-hidden';

const filters = document.querySelectorAll('.filters__filter');
const projects = document.querySelectorAll('.projects__project');

const projectTypeMapping = {
  1: 'Веб-сайт',
  2: 'Додаток',
  3: 'Дизайн',
  4: 'Маркетинг'
};

projects.forEach(project => {
  const projectGroup = project.getAttribute(dataField);
  const projectType = projectTypeMapping[projectGroup];
  
  const projectTypeElement = project.querySelector('.projects__project_type');
  projectTypeElement.textContent = projectType;
});

filters.forEach(filter => {
  filter.addEventListener('click', function() {
    filters.forEach(fl => fl.classList.remove('filters__filter-active'));
    filter.classList.add('filters__filter-active');

    const group = filter.getAttribute(dataField);
    projects.forEach(project => {project.classList.add(hideClass)});

    if (group == 0) {
      projects.forEach(project => {project.classList.remove(hideClass)});
      return;
    }
    projects.forEach(proj => {
      if(proj.getAttribute(dataField) == group)
        proj.classList.remove(hideClass)
    })
  });
});