import { AcademicCapIcon, PlayIcon, BoltSlashIcon } from '@heroicons/react/24/outline'

export const telemarketers = [
    {
        name: 'Clientes',
        description: 'Agregar un alumno a tu plantel de trabajo',
        href: '/app/alumnos/agregar',
        icon: AcademicCapIcon,
    },
    {
        name: 'Expedientes',
        description: "Visualizar el listado de alumnos asociados a tu plantel de trabajo",
        href: '/app/alumnos/listado',
        icon: AcademicCapIcon,
    }
]

export const submenuTele = [
    { name: 'Reportes', href: '/app/alumnos/activo', icon: PlayIcon },
]

export const consultas = [
    {
        name: 'Personas',
        description: 'Acceder al material academico disponible para alfabetización',
        href: '/app/seccion/listado',
        icon: AcademicCapIcon,
    },
    {
        name: 'Consultas',
        description: "Visualizar las evaluaciones disponibles para validar el aprendizaje",
        href: '/app/evaluacion/listado',
        icon: BoltSlashIcon,
    }
]

export const configuracion = [
    {
        name: 'Usuarios',
        description: 'Acceder al material academico disponible para alfabetización',
        href: '/app/seccion/listado',
        icon: BoltSlashIcon,
    },
    {
        name: 'Ayuda',
        description: "Visualizar las evaluaciones disponibles para validar el aprendizaje",
        href: '/app/evaluacion/listado',
        icon: BoltSlashIcon,
    }
]

export const perfil = [
    {
        name: 'Perfil',
        description: 'Revisa tu informacion personal.',
        href: '/app/perfil',
        icon: BoltSlashIcon,
    },
]

export const menuCelular = [
    {
        name: 'Estado Academico',
        href: '/app/estado',
        icon: BoltSlashIcon,
    },
    {
        name: 'Correlatividad para Cursar',
        href: '/app/correlativa-cursado',
        icon: BoltSlashIcon,
    },
    {
        name: 'Correlatividad para Rendir',
        href: '/app/correlativa-rendir',
        icon: BoltSlashIcon,
    },
    {
        name: 'Perfil Academico',
        href: '/app/profile',
        icon: BoltSlashIcon,
    },
]