
export const registerAdmin = (admin) => (
    $.ajax({
        method: 'POST',
        url: '/api/admins',
        data: { admin }
    })
)

export const login = (admin) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { admin }
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)