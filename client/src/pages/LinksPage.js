import React, { useState, useContext, useCallback, useEffect } from 'react'
import LinkList from '../components/LinkList'
import Loader from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export default function LinksPage() {
    const [links, setLinks] = useState([])
    const { loading, request } = useHttp()
    const { token } = useContext(AuthContext)
    const fetchLinks = useCallback(
         async () => {
            try {
                const fetched = await request('/api/link', 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                
                setLinks(fetched)
            } catch (error) { }
        }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }
    
    return (
            <>
                { !loading && <LinkList links={links} /> }
            </>
    )
}
