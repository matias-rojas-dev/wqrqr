import { fetchFromApi } from '.'
import { IProjectData } from '../../interfaces/projects/project-form.interface'

export const createProjectQuery = async (data: IProjectData, token: string) => {
  const response = await fetchFromApi<{
    success: boolean
    msg: string
  }>('proyectos-api/crear-nuevo-proyecto', token, 'POST', data)

  if (response && response.success) {
    return { success: true, msg: response.msg }
  } else {
    return {
      success: false,
      msg: response?.msg || 'Error desconocido al crear el proyecto',
    }
  }
}
