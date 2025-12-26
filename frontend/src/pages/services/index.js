import React, { useState, useMemo, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  CircularProgress,
  Paper,
  Divider,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CallToAction from '../../components/CallToAction';
import { getMegaMenus } from "../../features/megaMenuSlice";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { loading, error, list } = useSelector((state) => state.megaMenu);

  useEffect(() => {
    dispatch(getMegaMenus());
  }, [dispatch]);

  /* ================= DATA PROCESSING ================= */
  const allTopics = useMemo(() => {
    const topics = [];
    list.forEach(menu => {
      menu.data?.sections?.forEach(section => {
        section.items?.forEach(item => {
          topics.push({
            ...item,
            category: menu.title,
            section: section.heading,
          });
        });
      });
    });
    return topics;
  }, [list]);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return allTopics;
    const term = searchTerm.toLowerCase();
    return allTopics.filter(topic =>
      topic.label.toLowerCase().includes(term) ||
      topic.category.toLowerCase().includes(term) ||
      topic.section.toLowerCase().includes(term)
    );
  }, [searchTerm, allTopics]);

  const groupedTopics = useMemo(() => {
    const grouped = {};
    filteredTopics.forEach(topic => {
      if (!grouped[topic.category]) grouped[topic.category] = {};
      if (!grouped[topic.category][topic.section]) grouped[topic.category][topic.section] = [];
      grouped[topic.category][topic.section].push(topic);
    });
    return grouped;
  }, [filteredTopics]);

  /* ================= UI ================= */
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        
        
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link component={RouterLink} to="/" underline="hover">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
        </Breadcrumbs>

        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Browse Services
          </Typography>
          <Typography color="text.secondary" maxWidth={800} mx="auto">
            Quickly find services by searching across categories, sections, and topics.
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 8, py: 2 }}>
          <TextField
            fullWidth
            placeholder="Search services, categories, or sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchTerm('')}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '999px',
                bgcolor: 'background.paper',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              },
            }}
          />
        </Box>
            {loading && (
          <Box textAlign="center" py={10}>
            <CircularProgress />
          </Box>
        )}

       
        {/* Categories */}
        {Object.entries(groupedTopics).map(([category, sections]) => (
          <Paper
            key={category}
            sx={{
              mb: 6,
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              background: 'linear-gradient(145deg, #f9f9f9, #e8f0ff)',
            }}
          >
            {/* Category Header */}
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                textAlign: 'center',
                borderBottom: '4px solid #ffffff33',
              }}
            >
              <Typography variant="h4" fontWeight={700}>{category}</Typography>
              <Typography sx={{ opacity: 0.85 }}>
                {allTopics.filter(t => t.category === category).length} services available
              </Typography>
            </Box>

            {/* Sections */}
            {Object.entries(sections).map(([sectionName, topics]) => (
              <Box key={sectionName} sx={{ px: { xs: 3, md: 5 }, py: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={3}
                  sx={{
                    borderBottom: '2px solid #cfd8dc',
                    pb: 1,
                    color: 'text.secondary',
                  }}
                >
                  {sectionName}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                    gap: 3,
                  }}
                >
                  {topics.map(topic => (
                    <Paper
                      component="li"
                      key={topic.link}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '1px solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                        },
                      }}
                    >
                      <CheckCircleIcon color="primary" sx={{ mr: 2 }} />
                      <Typography
                        component={RouterLink}
                        to={topic.link}
                        sx={{
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: 'text.primary',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {topic.label}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            ))}
          </Paper>
        ))}

        {/* Empty State */}
        {filteredTopics.length === 0 && (
          <Box textAlign="center" py={10}>
            <Typography variant="h6" gutterBottom>
              No services found 😕
            </Typography>
            <Typography color="text.secondary">
              Try searching by category name, section, or keyword.
            </Typography>
          </Box>
        )}
         {error && (
          <Box textAlign="center" py={10}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
      </Container>

      {/* CTA */}
      <CallToAction></CallToAction>
    </Box>
  );
};

export default Services;
